app.view.content.upgrade = app.lib.element({
    displayName: 'content.upgrade',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-rocket' }),
                'Upgrade to Pro'
            ),
            ' coming soon',
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'Support Beyondpad development and new features, plus remove all quotas (there are no quotas at the moment)')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});