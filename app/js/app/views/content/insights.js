app.view.content.insights = app.lib.element({
    displayName: 'content.insights',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-chart-pie-alt-explode' }),
                'Insights'
            ),
            ' coming soon',
            React.DOM.div({className:'details'},
                React.DOM.div(null, 'Get automatic insights based on your notes and trackers'),
                React.DOM.div(null, 'Create graphs and charts for projects, expenses and more...')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});