app.view.sidepane.component.types = app.lib.element({
    displayName: 'sidepane.component.types',
    render: function () {
        return (
            React.DOM.div(null,
                app.view.sidepane.component.item({ text: 'Text', icon: 'icon-sort-alphabet' }),
                app.view.sidepane.component.item({ text: 'Stopwatch', icon: 'icon-stopwatch' }),
                app.view.sidepane.component.item({ text: 'List', icon: 'icon-list-bullet' })
            )
        );
    }
});