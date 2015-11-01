app.view.components.group = app.lib.element({
    displayName: 'components.group',
    mixins: [React.addons.PureRenderMixin],
    getDefaultProps: function () {
        return {
            name: null,
            labelClassName: null
        }
    },
    render: function () {
        return (
            React.DOM.div({ className: 'optionsitem' },
                this.props.name ? React.DOM.div({ className: 'label ' + (this.props.labelClassName || '') }, this.props.name) : null,
                React.DOM.div({ className: 'element' },
                    this.props.children
                )
            )
        );
    }
});