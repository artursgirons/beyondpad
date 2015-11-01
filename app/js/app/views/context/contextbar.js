app.view.context.tags = app.view.context.boards = app.view.context.trackers = app.view.context.notes = app.lib.element({
    displayName: 'context.notes',
    getInitialState: function () {
        return {
            expanded:false
        }
    },
    componentWillMount: function () {
        app.events.on('contextbar:initialize', this.initialize, this);
        app.events.on('contextbar:update', this.update, this);
        app.events.on('contextbar:dispose', this.dispose, this);
    },
    initialize: function (selection) {
        this.selection = selection;
        this.forceUpdate(function () {
            this.triggerToggle();
        }.bind(this));
    },
    dispose: function () {
        this.selection = null;
        this.props.toggle(false);
        this.setState({ expanded: false });
    },
    update: function () {
        this.forceUpdate(function () {
            this.triggerToggle();
        }.bind(this));
    },
    triggerToggle: function () {
        if (this.selection) {
            this.props.toggle(this.selection.selected.length > 0 || app.navigation.view === 'trash' || this.state.expanded);
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.triggerToggle();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
        this.props.toggle(false);
    },

    componentDidMount: function () {
    },

    applyRetag: function (pushpull) {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            }),
            tags: pushpull
        }

        this.selection.collection.updateNotes('/api/notes/update/tags', update);
    },

    applyColor: function (color) {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            }),
            color: color
        }

        this.selection.collection.updateNotes('/api/notes/update/color', update);
    },

    applyStatus: function (status) {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            }),
            status: status
        }

        this.selection.collection.updateNotes('/api/notes/update/status', update);
    },

    applyDelete: function () {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            })
        }

        this.selection.collection.removeNotes(update);
    },

    retagAll: function (event) {
        var menu = {
            type: 'retagmenu',
            selection: this.selection,
            callback: this.applyRetag
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    moveTo: function (event) {
        var menu = {
            type: 'statusmenu',
            callback: this.applyStatus
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    changeColor: function (event) {
        var menu = {
            type: 'colormenu',
            callback: this.applyColor
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom', 'middle');
    },
    changeViewTo: function (view) {
        var path = app.router.getPath();

        // TODO: refactor this marasmatic crap
        var nav = app.router.prev || app.navigation;

        if (view) {
            if (nav.query && nav.query.all().length > 0) {
                path += '&';
            } else {
                path += '/';
            }
            path += view;
            path = path.replace('//', '/').replace('/&', '/');
        }

        app.router.navigate(path, { trigger: true, temp: true });
    },
    changeView: function (event) {
        var menu = {
            type: 'textmenu',
            items: [
                {
                    icon: 'icon-archive',
                    text: 'Show archived',
                    callback: this.changeViewTo.bind(this, 'archive')
                },
                {
                    icon: 'icon-inbox',
                    text: 'Show inboxed',
                    callback: this.changeViewTo.bind(this, 'inbox')
                },
                {
                    icon: 'icon-trash-alt',
                    text: 'Show trashed',
                    callback: this.changeViewTo.bind(this, 'trash')
                },
                {
                    icon: 'icon-folder-open',
                    text: 'Show all',
                    callback: this.changeViewTo.bind(this, null)
                }
            ]
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    changeLayoutTo: function (layout) {
        app.data.account.setOptions('noteLayout', layout);
        app.events.trigger('resize:window');
    },

    changeLayout: function (event) {
        var menu = {
            type: 'textmenu',
            items: [
                {
                    icon: 'icon-th-1',
                    text: 'Tile alignment',
                    callback: this.changeLayoutTo.bind(this, 'masonry')
                },
                {
                    icon: 'icon-menu',
                    text: 'Row alignment',
                    callback: this.changeLayoutTo.bind(this, 'row')
                }
            ]
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    toggleContextPanel: function () {
        this.selection.deselectAll();
        this.setState({
            expanded: !this.state.expanded
        }, function () {
            this.triggerToggle();
        }.bind(this));
    },
    render: function () {
        if (!this.selection) return null;

        return (
            React.DOM.div({ id: 'ctx', className: 'animate' },
                React.DOM.div({ className: 'ctxRight' },
                    app.view.components.button({
                        icon: 'icon-sort',
                        dropdown: true,
                        text: '',
                        hidden: true
                    }),
                    app.view.components.button({
                        icon: 'icon-view-mode',
                        dropdown: true,
                        text: '',
                        title: 'Layout mode',
                        onClick: this.changeLayout,
                        inactive: _.contains(['board', 'board-search'], app.navigation.view)
                    }),
                    app.view.components.button({
                        icon: 'icon-eye',
                        text: '',
                        title: 'Status view toggle',
                        dropdown: true,
                        onClick: this.changeView,
                        inactive: !_.contains(['all', 'trackers', 'search', 'manage', 'list', 'list-search', 'board', 'board-search'], app.navigation.view)
                    })
                ),
                React.DOM.div({ className: 'ctxLeft' },
                    app.view.components.button({
                        icon: 'icon-block',
                        text: 'Uncheck',
                        title: 'Unchek all items',
                        ticker: this.selection.selected.length,
                        inactive: this.selection.selected.length === 0,
                        onClick: this.selection.deselectAll
                    }),
                    app.view.components.button({
                        icon: 'icon-ok-big',
                        text: 'Check all',
                        title: 'Check all items',
                        onClick: this.selection.selectAll
                    }),
                    app.view.components.button({
                        icon: 'icon-tags',
                        text: 'Tags',
                        title: 'Change item tags',
                        inactive: this.selection.selected.length === 0,
                        dropdown: true,
                        onClick: this.retagAll
                    }),
                    app.view.components.button({
                        icon: 'icon-art-gallery',
                        text: 'Color',
                        title: 'Change item color',
                        inactive: this.selection.selected.length === 0,
                        dropdown: true,
                        onClick: this.changeColor
                    }),
                    app.view.components.button({
                        icon: 'icon-folder-open',
                        text: (app.navigation.view === 'trash' ? 'Restore' : 'Move'),
                        inactive: this.selection.selected.length === 0,
                        dropdown: true,
                        onClick: this.moveTo
                    }),
                    app.view.components.button({
                        icon: 'icon-trash-alt',
                        text: 'Permanently delete',
                        inactive: this.selection.selected.length === 0,
                        hidden: app.navigation.view !== 'trash',
                        onClick: this.applyDelete
                    })
                ),
                React.DOM.i({ className: 'contextpanetoggle icon-ellipsis-vert', onClick: this.toggleContextPanel, title: 'Toggle context bar' }),
                app.view.context.contextmenu({
                    type: 'contextbar',
                    selector: '#ctx'
                })
            )
        );
    }
});