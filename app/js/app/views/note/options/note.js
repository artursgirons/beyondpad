app.view.note.options = app.view.note.options || {};
app.view.note.options.note = app.lib.element({
    displayName: 'note.options.note',
    mixins: [app.view.note.options.base],
    render: function () {
        return (
            React.DOM.div({ className: 'options' },
                app.view.components.checkbox(this.getOptionToggleProps('timestamp', 'Show timestamp'))
            )
        );
    }
});