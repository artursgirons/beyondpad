app.view.item.contextswitch = app.view.item.contextswitch || {};
app.view.item.contextswitch.edit = app.lib.element({
    displayName: 'item.contextswitch.edit',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        var color = { 'color': app.lib.color(this.props.model.data().color) };

        return (
            React.DOM.div({ className: 'contextswitch', ref: 'contextswitch' },
                React.DOM.div({ className: 'currenctcontext' },
                    React.DOM.i({ className: app.config.context[this.props.context].icon, style: color })
                )
            )
        );
    }
});