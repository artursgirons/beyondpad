app.view.context.components = app.view.context.components || {};
app.view.context.components.textmenu = app.lib.element({
    displayName: 'context.components.textmenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (item, event) {
        if (item.callback) {
            item.callback();
        }
        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu textmenu' },
                _.map(this.props.data.items, function (item, index) {
                    return React.DOM.div({
                        key:index,
                        className: 'item', 'data-value': item.value,
                        onClick: this.click.bind(this, item)
                    },
                        React.DOM.i({ className: item.icon }),
                        React.DOM.span(null, item.text)
                    );
                }, this)
            )
        );
    }
});