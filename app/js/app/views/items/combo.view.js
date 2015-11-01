app.view.item.combo = app.view.item.combo || {};
app.view.item.combo.view = app.lib.element({
    displayName: 'item.combo.view',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],

    componentWillMount: function () {
    },

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },

    componentDidUpdate: function (prevProps, prevState) {
    },

    getInitialState: function () {
        return {};
    },

    componentWillReceiveProps: function (nextProps) {
    },

    render: function () {
        var selected = _.find(this.props.data.data.items, function (item) {
            return item.checked;
        });

        return (
            React.DOM.div({ className: 'combo' },
                React.DOM.div({ className: 'combo-content' }, selected ? selected.text : '- Not selected -'),
                this.props.context==='tracker'?
                    React.DOM.i({ className: 'combo-indicator icon-down-dir' }):
                    null
            )
        );
    }
});