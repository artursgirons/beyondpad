app.view.sidepane.search = app.lib.element({
    displayName: 'sidepane.search',
    getDefaultProps: function () {
        return {
            filter: null,
            onChange: null,
            onEnter: null,
            isSearch: false
        }
    },
    onChange: function (event) {
        if (this.props.onChange) {
            if (event.target.value === '') {
                this.clear();
            } else {
                this.props.onChange(event.target.value);
            }
        }
    },
    onKeyDown: function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    },
    onKeyUp: function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.props.onEnter) {
                this.props.onEnter()
            }
        }
    },
    clear: function () {
        if (this.props.onChange) {
            this.props.onChange(null);
        }
    },
    render: function () {
        return (
            React.DOM.div({ className: 'searchcontainer' },
                React.DOM.div({ className: 'searchbox' },
                    React.DOM.div({ className: 'searchcontrol' + (this.props.isSearch ? ' isnotesearch' : '') },
                        React.DOM.textarea({
                            rows: '1',
                            placeholder: this.props.placeholder || 'Filter | Search',
                            className: 'searchinput',
                            onChange: this.onChange,
                            onKeyUp: this.onKeyUp,
                            onKeyDown: this.onKeyDown,
                            value: this.props.filter || ''
                        }),
                        React.DOM.i({ className: 'icon-search submitsearch' }),
                        (this.props.filter ? React.DOM.i({ className: 'icon-cancel clearsearch', onClick: this.clear }) : null)
                    )
                )
            )
        );
    }
});