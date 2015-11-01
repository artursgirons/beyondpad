app.view.item.countdown = app.view.item.countdown || {};
app.view.item.countdown.view = app.lib.element({
    displayName: 'item.countdown.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.update();
        this.toggleTickListner();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {
            running: false,
            ellapsed: 0
        };
    },
    update: function () {
        var ellapsed = this.props.data.data.ellapsed;
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            ellapsed += app.lib.dateUTC().getTime() - periods[periods.length - 1].started;
        }

        this.setState({
            ellapsed: ellapsed
        });
    },
    start: function () {
        this.props.data.data.periods.push({
            started: app.lib.dateUTC().getTime(),
            stopped: null
        });
        this.toggleTickListner();

        this.save();
    },
    stop: function () {
        var periods = this.props.data.data.periods;
        periods[periods.length - 1].stopped = app.lib.dateUTC().getTime();
        this.props.data.data.ellapsed += periods[periods.length - 1].stopped - periods[periods.length - 1].started;
        this.toggleTickListner();

        this.save();
    },
    reset: function () {
        this.props.data.data.periods = [];
        this.props.data.data.ellapsed = 0;
        this.update();
        this.toggleTickListner();

        this.save();
    },
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    componentWillReceiveProps: function (nextProps) {
    },
    toggleTickListner: function () {
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            app.events.on('tick:seconds', this.update, this);
            this.setState({ running: true });
        } else {
            app.events.off('tick:seconds', null, this);
            this.setState({ running: false });
        }
    },
    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },
    render: function () {
        var commands;

        switch (this.state.running) {
            case false:
                commands = React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                    React.DOM.div({ className: 'left', onClick: this.start }, React.DOM.i({ className: 'icon-play' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
            case true:
                commands = React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                    React.DOM.div({ className: 'left', onClick: this.stop }, React.DOM.i({ className: 'icon-pause' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
        }

        var ms = this.props.data.data.start - this.state.ellapsed;
        var date = new Date(Math.max(ms, 0));

        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        return (
            React.DOM.div({ className: 'stopwatch field' },
                React.DOM.div({ className: 'block' },
                    React.DOM.div({ className: 'value' + (ms < 0 ? ' blink' : '') }, dateString),
                    commands
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    null
                ) : null
            )
        );
    },
    focus: function () {
        return true;
    },
    statics: {
        hasOptions: false
    }
});