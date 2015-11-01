app.view.item.countdown = app.view.item.countdown || {};
app.view.item.countdown.edit = app.lib.element({
    displayName: 'item.countdown.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
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
            ellapsed: 0,
            editing: null
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
        this.view();
        this.props.data.data.periods.push({
            started: app.lib.dateUTC().getTime(),
            stopped: null
        });
        this.toggleTickListner();
    },
    stop: function () {
        this.view();
        var periods = this.props.data.data.periods;
        if (periods && periods.length > 0) {
            periods[periods.length - 1].stopped = app.lib.dateUTC().getTime();
            this.props.data.data.ellapsed += periods[periods.length - 1].stopped - periods[periods.length - 1].started;
        }
        this.toggleTickListner();
    },
    reset: function () {
        this.view();
        this.props.data.data.periods = [];
        this.props.data.data.ellapsed = 0;
        this.update();
        this.toggleTickListner();
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
    edit: function () {
        var date = new Date(Math.max(this.props.data.data.start - this.state.ellapsed, 0));

        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        this.stop();

        this.setState({
            editing: dateString
        }, function () {
            this.refs.input.getDOMNode().focus()
        }.bind(this));
    },
    view: function () {
        if (this.state.editing !== null) {
            this.setState({
                editing: null
            }, this.update);
        }
    },
    onChange: function (event) {
        var regex = /^(((\d+)?(:([0-5]?\d)?)?(:([0-5]?\d)?)?)|((\d+)?([,\.])?(\d+)?))$/gi
        var value = event.target.value;

        if (regex.test(value)) {
            //var value = this.state.editing;
            var val = 0;
            if (value.indexOf(':') >= 0) {
                var arr = value.split(':');

                if (arr[0]) {
                    val += parseInt(arr[0]) * 1000 * 60 * 60;
                }
                if (arr[1]) {
                    val += parseInt(arr[1]) * 1000 * 60;
                }
                if (arr[2]) {
                    val += parseInt(arr[2]) * 1000;
                }
            } else {
                value = value.replace(',', '.');
                val = Math.round(parseFloat(value) * 1000 * 60 * 60);
            }

            this.props.data.data.periods = [];
            this.props.data.data.periods.push({
                started: 0,
                stopped: val
            });

            this.props.data.data.start = val;
            this.props.data.data.ellapsed = 0;

            this.setState({
                editing: value
            });
        }
    },
    render: function () {
        var commands;

        switch (this.state.running) {
            case false:
                commands = React.DOM.div({ className: 'commands' },
                    React.DOM.div({ className: 'left', onClick: this.start }, React.DOM.i({ className: 'icon-play' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
            case true:
                commands = React.DOM.div({ className: 'commands' },
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
                    this.state.editing !== null ?
                        React.DOM.input({
                            className: 'value' + (ms < 0 ? ' blink' : ''),
                            value: this.state.editing,
                            onBlur: this.view,
                            ref: 'input',
                            placeholder: 'Blank time',
                            onChange: this.onChange
                        }) :
                        React.DOM.div({
                            className: 'value' + (ms < 0 ? ' blink' : ''),
                            onClick: this.edit
                        }, dateString),
                    commands
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions blank' }) : null
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