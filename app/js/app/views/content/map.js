app.view.content.map = app.lib.element({
    displayName: 'content.map',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-map' }),
                'Map view'
            ),
            ' coming soon',
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'View or add notes and trackers on map'),
                React.DOM.div(null, 'Any data with location information can be seen here')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});