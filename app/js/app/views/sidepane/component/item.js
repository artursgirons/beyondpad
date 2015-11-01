app.view.sidepane.component.item = app.lib.element({
    displayName: 'sidepane.component.item',
    getInitialState: function () {
        return {
            expanded: !!this.props.expanded
        };
    },
    toggle: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    },
    render: function () {
        var hasContent = !!this.props.children;
        return (
            React.DOM.div({ className: 'paneitemwrapper' },
                React.DOM.i({
                    className: 'expander' + (this.state.expanded ? ' icon-down-dir' : ' icon-right-dir') + (hasContent ? '' : ' space'),
                    onClick: this.toggle
                }),
                React.DOM.div({
                    className: "paneitem" + (this.props.selected ? ' selected' : ''),
                    onDoubleClick: this.toggle,
                    onClick: this.props.click,
                    title: this.props.text
                }, React.DOM.i({
                    className: this.props.icon,
                    style: { color: this.props.color }
                }), this.props.text),
                this.state.expanded ? React.DOM.div({ className: 'subpane' },
                    this.props.children
                ) : null
            )
        );
    }
});