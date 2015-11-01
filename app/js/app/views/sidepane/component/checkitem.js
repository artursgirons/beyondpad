app.view.sidepane.component.checkitem = app.lib.element({
    displayName: 'sidepane.component.checkitem',
    getInitialState: function () {
        return {
            expanded: this.props.expanded
        };
    },
    toggle: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    },
    componentWillReceiveProps: function (nextProps) {
        if ((nextProps.expanded !== this.state.expanded) || (nextProps.forceExpanded !== this.props.forceExpanded)) {
            this.setState({
                expanded: nextProps.expanded || (nextProps.forceExpanded ? false : this.state.expanded)
            });
        }
    },
    checkComp: function () {
        if (this.props.checked === true) {
            return (
                React.DOM.span({ className: 'handle' },
                    React.DOM.i({
                        className: 'blank icon-ok-squared',
                        style: { color: this.props.color }
                    }),
                    React.DOM.i({
                        className: 'toggle icon-ok-blank',
                        style: { color: this.props.color },
                        onClick: this.props.toggle
                    })
                )
            );
        }

        if (this.props.checked === false) {
            return (
                React.DOM.span({ className: 'handle' },
                    React.DOM.i({
                        className: 'blank icon-blank',
                        style: { color: this.props.color }
                    }),
                    React.DOM.i({
                        className: 'toggle icon-blank-empty',
                        style: { color: this.props.color },
                        onClick: this.props.toggle
                    })
                )
            );
        }

        if (true) {
            return (
                React.DOM.span({ className: 'handle' },
                    React.DOM.i({
                        className: 'blank icon-minus-squared',
                        style: { color: this.props.color }
                    }),
                    React.DOM.i({
                        className: 'toggle icon-blank-empty',
                        style: { color: this.props.color },
                        onClick: this.props.toggle
                    })
                )
            );
        }
    },
    render: function () {
        var hasContent = !!this.props.children;

        if (!this.props.visible) {
            return null;
        }

        return (
            React.DOM.div({ className: 'paneitemwrapper' },
                React.DOM.i({
                    className: 'expander' + (this.state.expanded ? ' icon-down-dir' : ' icon-right-dir') + (hasContent ? '' : ' space'),
                    onClick: this.toggle
                }),
                    React.DOM.div(
                    {
                        className: "paneitem check" + (this.props.selected ? ' selected' : '') + (this.props.inactive ? ' inactive' : ''),
                        onDoubleClick: this.toggle,
                        onClick: this.props.click,
                        title: this.props.text
                    },
                    this.checkComp(),
                    this.props.text
                ),
                this.state.expanded ? React.DOM.div({ className: 'subpane' },
                    this.props.children
                ) : null
            )
        );
    }
});