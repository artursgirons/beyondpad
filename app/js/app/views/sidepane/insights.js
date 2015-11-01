app.view.sidepane.insights = app.lib.element({
    displayName: 'sidepane.insights',
    itemOptions: function (options) {
        options.click = this.itemClick.bind(this, options.view);
        options.selected = (options.view === this.props.navigation.view);
        return options;
    },
    itemClick: function (view, event) {
        app.router.navigate('notes/' + view, { trigger: true });
    },
    render: function () {
        return (
            React.DOM.div(null,
                app.view.sidepane.component.item(this.itemOptions({ text: 'Notes', icon: 'icon-folder', expanded: true, view: 'all' }), app.view.sidepane.component.tags({ tree: app.data.tags.reduceTree(app.data.tags.getTree()) })),
                app.view.sidepane.component.item({ text: 'More', icon: 'icon-braille', expanded: true },
                    app.view.sidepane.component.item(this.itemOptions({ text: 'Bin', icon: 'icon-trash-alt', view: 'bin' }))
                )
            )
        );
    }
});