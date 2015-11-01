app.view.item.numeric = app.view.item.numeric || {};
app.view.item.numeric.view = app.lib.element({
    displayName: 'item.numeric.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    onIncrement: function (dir, event) {
        value = this.props.data.data.value || '0';
        var dec = app.lib.decimals(value);
        var value = parseFloat(value);
        value += dir * Math.pow(10, -dec);
        value = Math.round(value * Math.pow(10, dec)) / Math.pow(10, dec);
        this.props.data.data.value = value.toFixed(dec);

        this.forceUpdate();

        this.save();
    },
    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    render: function () {
        var data = this.props.data.data;

        return (
            React.DOM.div({ className: 'numeric' + (data.controls ? ' hasControls' : '') },
                React.DOM.div({ className: 'block' },
                    React.DOM.div({ className: 'value' }, data.value || '0')
                ),
                data.controls ?
                    React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                        React.DOM.div({ className: 'left', onClick: this.onIncrement.bind(this, +1) }, React.DOM.i({ className: 'icon-plus' })),
                        React.DOM.div({ className: 'right', onClick: this.onIncrement.bind(this, -1) }, React.DOM.i({ className: 'icon-minus' }))
                    ) : null
            )
        );
    },
});