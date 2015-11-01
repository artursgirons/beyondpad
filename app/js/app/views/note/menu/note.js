app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.note = app.lib.element({
    displayName: 'note.menu.note',
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

            if (this.props.model.data('tag')) {
                menu.items.push({
                    icon: 'icon-unlink-01',
                    text: 'Relese from tag',
                    callback: this.tag
                });
            } else {
                menu.items.push({
                    icon: 'icon-link-01',
                    text: 'Link to tag',
                    callback: this.tag
                });
            }
        }
        else {
            menu.items.push({
                icon: 'icon-folder',
                text: 'Move to All notes',
                callback: this.moveToAll
            });

            menu.items.push({
                icon: 'icon-inbox',
                text: 'Move to Inbox',
                callback: this.moveToInbox
            });

            menu.items.push({
                icon: 'icon-archive',
                text: 'Move to Archive',
                callback: this.moveToArchive
            });

            if (this.props.model.data('tag')) {
                menu.items.push({
                    icon: 'icon-unlink-01',
                    text: 'Relese from tag',
                    callback: this.releseTag
                });
            } else {
                menu.items.push({
                    icon: 'icon-link-01',
                    text: 'Link to tag',
                    callback: this.tag
                });
            }

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
                text: 'Add new item',
                icon: 'icon-plus-alt',
                value: 'add'
            },
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
        add: [
            {
                text: 'Text block',
                icon: 'icon-font',
                value: 'text'
            },
            {
                text: 'Check list',
                icon: 'icon-check',
                value: 'list'
            },
            {
                text: 'Link & linked image',
                icon: 'icon-link',
                value: 'link'
            },
            {
                text: 'Numeric',
                icon: 'icon-sort-numeric',
                value: 'numeric'
            },
            {
                text: 'Stopwatch',
                icon: 'icon-stopwatch',
                value: 'stopwatch'
            },
            {
                text: 'Countdown',
                icon: 'icon-hourglass',
                value: 'countdown'
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