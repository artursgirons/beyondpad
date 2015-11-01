app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.quick = app.lib.element({
    mixins: [app.lib.mixins.rootParent],
    getDefaultProps: function () {
        return {
            context: 'note',
            model: null
        }
    },
    componentWillMount: function () {
    },
    componentWillUnmount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentDidMount: function () {
    },

    changeStatus: function (status, event) {
        this.props.model.setStatus(this.props.context, status);
    },

    changeColor: function (event) {
        var menu = {
            type: 'colormenu',
            callback: this.applyColor
        };

        app.events.trigger('contextmenu', event.target, menu, 'top', 'middle');
    },
    applyColor: function (color) {
        this.props.model.updateColor(color);
        this.props.model.save(this.props.context);
    },

    permanentlyDelete: function () {
        this.props.model.collection.removeNotes({ ids: [this.props.model.get('_id')] });
    },

    duplicate: function () {
        this.props.model.duplicate(this.props.context);
    },

    select: function () {
        this.rootParent().setSelected(true);
    },

    edit: function () {
        this.rootParent().changeView('edit');
    },

    showMore: function (event) {
        var status = this.props.model.data('status');

        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items.push({
            icon: 'icon-pencil-alt',
            text: 'Edit',
            callback: this.edit
        });

        if (status !== 'inbox') {
            menu.items.push({
                icon: 'icon-inbox',
                text: 'Move to Inbox',
                callback: this.changeStatus.bind(this, 'inbox')
            });
        }

        if (this.props.context === 'note') {
            menu.items.push({
                icon: 'icon-docs',
                text: 'Duplicate',
                callback: this.duplicate.bind(this)
            });
        }

        if (status !== 'trash') {
            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Move to Trash',
                callback: this.changeStatus.bind(this, 'trash')
            });
        }

        if (status === 'trash') {
            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Permanently delete',
                callback: this.permanentlyDelete.bind(this)
            });
        }

        app.events.trigger('contextmenu', event.target, menu);
    },

    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },

    render: function () {
        var status = this.props.model.data('status');
        var className = 'nsm';
        var icon = 'icon-ellipsis-vert';

        if (true) {
            var className = 'nsmb';
            var icon = 'icon-ellipsis';
        }

        return (
            React.DOM.div({ className: className },
                React.DOM.div({ className: 'nsm_main' },
                    React.DOM.div({ className: 'nsm_handle' },
                        React.DOM.i({ className: icon })
                    ),
                    React.DOM.div({
                        className: 'nsm_content picker',
                        style: {
                            backgroundColor: app.lib.color(this.props.model.data('color'))
                        }
                    },
                        React.DOM.div({ className: 'nsm_cont_sub', onClick: this.prevent },
                            React.DOM.i({ className: 'item icon-art-gallery', onClick: this.changeColor, title: 'Change color' }),
                            status !== 'all' ? React.DOM.i({ className: 'item icon-folder-open', onClick: this.changeStatus.bind(this, 'all'), title: 'Move to All' }) : null,
                            status !== 'archive' ? React.DOM.i({ className: 'item icon-archive', onClick: this.changeStatus.bind(this, 'archive'), title: 'Move to Archive' }) : null,
                            React.DOM.i({ className: 'item icon-ellipsis', onClick: this.showMore, title: 'More' }),
                            React.DOM.i({ className: 'item icon-ok right', onClick: this.select, title: 'Check (select)' })
                        )
                    )
                )
            )
        );
    }
});