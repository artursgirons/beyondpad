app.view.content.component.loading = app.lib.element({
    displayName: 'content.component.loading',
    render: function () {
        return (
            React.DOM.div({ className: 'loadingdata' },
                React.DOM.div({ className: 'loadingdatatext' }, 'Loading...')
            )
        );
    }
});