app.view.context.components = app.view.context.components || {};
app.view.context.components.tagmenu = app.lib.element({
    displayName: 'context.components.tagmenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (tag, event) {
        if (this.props.data.onClick) {
            this.props.data.onClick(this.props.data.tag, tag);
        }

        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu' },
                _.map(this.props.data.tags, function (tag, index) {
                    return (
                        app.view.components.tag({
                            key: app.lib.uidmap(tag),
                            tag: app.data.tags.get(tag),
                            onClickTag: this.click.bind(this, tag)
                        })
                    );
                }, this)
            )
        );
    }
});