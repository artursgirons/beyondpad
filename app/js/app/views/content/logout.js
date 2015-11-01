app.view.content.logout = app.lib.element({
    displayName: 'content.logout',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-off' }),
                'Logout'
            ),
            ' coming soon'
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});