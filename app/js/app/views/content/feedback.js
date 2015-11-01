app.view.content.feedback = app.lib.element({
    displayName: 'content.feedback',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.a({ className: 'highlight', href: 'mailto:feedback@beyondpad.com', target: '_blank' },
                React.DOM.i({ className: 'icon-comment' }),
                'feedback@beyondpad.com'
            ),
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'We would appreciate your feedback'),
                React.DOM.div(null,
                    'There are some social love buttons on ',
                    React.DOM.a({ href: 'http://www.beyondpad.com', target: '_blank' }, 'homepage'),
                    ' too. :)'
                )
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});