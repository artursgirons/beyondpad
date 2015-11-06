app.view.content.calendar = app.lib.element({
    displayName: 'content.calendar',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-calendar-number' }),
                'Calendar view'
            ),
            ' coming soon',
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'View or add notes and trackers in calendar view'),
                React.DOM.div(null, 'Any data with date information can be seen here')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
