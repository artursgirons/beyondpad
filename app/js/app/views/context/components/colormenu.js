app.view.context.components = app.view.context.components || {};
app.view.context.components.colormenu = app.lib.element({
    displayName: 'context.components.colormenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (color, event) {
        this.props.data.callback(color);
        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu colormenu' },
                _.map(app.config.colors, function (color, index) {
                    return (
                        React.DOM.i({
                            key:index,
                            'className': 'icon-blank ',
                            onClick: this.click.bind(this, color),
                            style: { color: app.lib.color(color) }
                        })
                    );
                }, this)
            )
        );
    }
});