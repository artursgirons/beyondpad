app.view.components.checkbox = app.lib.element({
    displayName: 'components.checkbox',
    getInitialState: function () {
        return {
            checked: this.props.checked,
            isDefault: this.props.isDefault
        };
    },
    getDefaultProps: function () {
        return {
            field: null,
            checked: false,
            isDefault: true,
            text: 'Label',
            callback: null
        }
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function () {
    },
    toggle: function (event) {
        if (this.props.callback) {
            this.props.callback(this.props.field, !this.state.checked, this);
        }
    },
    update: function (checked, isDefault) {
        this.setState({
            checked: checked,
            isDefault: isDefault
        });
    },
    render: function () {
        return (
            React.DOM.div({ className: 'checkboxlable' },
                React.DOM.span({
                    className: this.state.isDefault ? 'default' : '',
                    onClick: this.toggle
                },
                    React.DOM.i({
                        className: window.classnames({
                            'checkbox': true,
                            'icon-blank-empty': !this.state.checked,
                            'icon-ok-blank': this.state.checked
                        })
                    }),
                    React.DOM.span({ className: 'labeltext' },
                        this.props.text
                    )
                )
            )
        );
    }
});