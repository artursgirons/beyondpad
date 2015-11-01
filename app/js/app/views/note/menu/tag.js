app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.tag = app.lib.element({
    displayName: 'note.menu.tag',
    mixins: [app.lib.mixins.rootParent, app.view.note.menu.base, app.lib.mixins.resize],
    menu: function (event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        if (this.props.model.isNew()) {
            menu.items.push({
                icon: 'icon-arrows-cw',
                text: 'Clear',
                callback: this.clear
            });
        }
        else {
            menu.items.push({
                icon: 'icon-folder',
                text: 'Move to All tags',
                callback: this.moveToAll
            });

            menu.items.push({
                icon: 'icon-archive',
                text: 'Move to Archive',
                callback: this.moveToArchive
            });

            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Move to Trash',
                callback: this.moveToTrash
            });
        }

        app.events.trigger('contextmenu', event.target, menu);
    },
    commands: {
        root: [
            {
                text: 'Change color',
                icon: 'icon-art-gallery',
                value: 'color'
            },
            {
                text: 'Options',
                icon: 'icon-cog',
                value: 'options'
            },
            {
                text: 'More',
                icon: 'icon-ellipsis',
                value: 'more'
            }
        ],
        color: _.map(app.config.colors, function (color) {
            return {
                text: color,
                icon: 'icon-blank',
                value: color,
                color: color
            };
        })
    }
});