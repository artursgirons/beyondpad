app.view.note.options = app.view.note.options || {};
app.view.note.options.tracker = app.lib.element({
    displayName: 'note.options.tracker',
    mixins: [app.view.note.options.base],
    render: function () {
        return (
            React.DOM.div({ className: 'options' },
                app.view.components.checkbox(this.getOptionToggleProps('timestamp', 'Show timestamp')),
                app.view.components.checkbox(this.getOptionToggleProps('hideFromTrackerList', 'Hide from tracker list')),
                app.view.components.checkbox(this.getOptionToggleProps('autoExpand', 'Auto expand')),

                React.DOM.div({ className: 'seperator' }),

                app.view.components.checkbox(this.getOptionToggleProps('noteTimestamp', 'Note - Show timestamp')),
                app.view.components.checkbox(this.getOptionToggleProps('noteInheritColor', 'Note - Same color as tracker')),
                app.view.components.checkbox(this.getOptionToggleProps('noteAddToInbox', 'Note - Add to inbox')),
                app.view.components.checkbox(this.getOptionToggleProps('noteLinkToTag', 'Note - Create as tag')),

                React.DOM.div({ className: 'seperator' }),

                app.view.components.group({ name: 'Note - Extra tags' },
                    app.view.note.options.components.extratags({
                        model: this.props.model,
                        events: this.props.events
                    })
                )
            )
        );
    }
});