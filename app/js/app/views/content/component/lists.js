app.view.content.component.lists = app.lib.element({
    displayName: 'content.component.lists',
    componentWillMount: function () {
        this.setModel(this.props.board);

        this.collection = new app.collection.notes(null, { context: 'note' });
        this.collection.req = {
            page: 'none'
        };
        this.collection.on('batch:collection', this.updateLists);

        this.selection = app.lib.selection({
            collection: this.collection,
            selectAll: this.selectAllNotes
        });
    },

    selectAllNotes: function () {
        var lists = _.map(_.keys(this.refs), function (key) { return this.refs[key]; }, this);
        _.each(lists, function (list) {
            list.selectAllNotes();
        });
    },

    componentDidMount: function () {
        $(this.getDOMNode()).sortable({
            containment: "parent",
            items: '.boardlist.savedlist',
            tolerance: 'pointer',
            cursor: 'ew-resize',
            axis: 'x',
            handle: ".head",
            update: this.reorderFinished,
            scroll: true,
            delay: 100,
            forceHelperSize: true,
            forcePlaceholderSize: true
        });

        app.events.trigger('contextbar:initialize', this.selection);
    },
    reorderFinished: function (event, ui) {
        var indexArray = $(this.getDOMNode()).sortable("toArray", { attribute: 'data-index' });
        var orderedItems = _.map(indexArray, function (index) {
            return this.board.get('lists').models[parseInt(index)];
            //return this.props.model.data(this.props.context).items[parseInt(index)];
        }, this);

        orderedItems = orderedItems.concat(_.difference(this.board.get('lists').models, orderedItems));

        $(this.getDOMNode()).sortable("cancel");
        this.board.set('lists', new app.collection.lists(orderedItems));
        //this.props.model.update(this.props.context, { items: { $set: orderedItems } }, true);

        this.board.save();
        this.refresh();
    },
    componentWillUnmount: function () {
        app.events.trigger('contextbar:dispose');
        this.unsetModel();
    },
    componentWillReceiveProps: function (nextProps) {
        this.setModel(nextProps.board);
    },
    setModel: function (id) {
        this.unsetModel();
        this.board = app.data.boards.get(id);
        this.board.on('change', this.refresh, this);
        this.newList = new app.model.list();
    },
    unsetModel: function () {
        if (this.board) {
            this.board.off(null, null, this);
            this.board = null;
        }
    },
    refresh: function () {
        this.forceUpdate();
    },
    add: function (list) {
        this.board.get('lists').push(list)
        this.board.save();
        this.refresh();
    },
    remove: function (list) {
        this.board.get('lists').remove(list)
        this.board.save();
        this.refresh();
    },
    save: function () {
        this.board.save();
        this.refresh();
    },

    updateLists: function (response) {
        if (!response) { return; };

        var responseData = _.isArray(response) ? response : [response];

        var lists = _.map(_.keys(this.refs), function (key) { return this.refs[key]; }, this);
        _.each(lists, function (list) {
            var inContextData = app.dataadapter.local.filter(list.collection.req, responseData);

            var notesUpdate = _.map(inContextData, function (item) { return app.model.note.parse(item); });

            var models = list.collection.add(notesUpdate, { merge: true });
            if (models.length > 0) {
                list.collection.sort();
            }

            _.each(models, function (model) {
                model.trigger('batch:model');
            });

            var notesRemove = _.map(_.difference(_.pluck(responseData,'_id'), _.pluck(inContextData,'_id')), function (id) {
                return list.collection.get(id);
            });

            list.collection.remove(notesRemove);

            list.collection.trigger('batch:collection');
        });
    },

    render: function () {
        return (
            React.DOM.div({
                className: 'boardlistwrapper' + ((this.board.get('lists').models.length + (this.board.get('lists').models.length > 0 ? 0 : 1)) % 2 == 1 ? ' bg light' : ' bg dark')
            },
                _.map(this.board.get('lists').models, function (list, index) {
                    return (
                        app.view.content.component.list({
                            key: app.lib.uidmap(list.get('_id')),
                            ref: index,
                            lists: this.board.get('lists').models,
                            model: list,
                            add: this.add,
                            save: this.save,
                            remove: this.remove,
                            mode: 'view',
                            index: index,
                            selection: this.selection,
                            updateLists: this.updateLists
                        })
                    );
                }, this),
                app.view.content.component.list({
                    key: 'new',
                    model: this.newList,
                    add: this.add,
                    save: this.save,
                    remove: this.remove,
                    mode: this.board.get('lists').models.length > 0 ? 'add' : 'edit',
                    index: this.board.get('lists').models.length
                })
            )
        );
    }
});