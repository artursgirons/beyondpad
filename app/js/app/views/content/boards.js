app.view.content.boards = app.lib.element({
    displayName: 'content.boards',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: 'note' });
        this.model = new app.model.note(null, { collection: this.collection });

        switch (this.props.navigation.view) {
            case 'list':
            case 'list-search':
                this.collection.on('loaded', this.onDataLoaded, this);
                this.resetDefaults();
                app.lib.newNotes.add(this.model);
                this.loadData();
                break;
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resetDefaults();
    },
    componentWillReceiveProps: function (nextProps) {
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    loadData: function () {
        var listModel = app.data.boards.get(app.navigation.data.board).get('lists').get(app.navigation.data.list);

        var query = _.map(listModel.data('tags'), function (tag) {
            return {
                type: 'branch',
                query: tag
            }
        }).concat(
            _.map(listModel.data('excludeTags'), function (tag) {
                return {
                    type: 'not',
                    query: tag
                }
            })
        );

        query = $.extend(true, [], query.concat(app.navigation.query.all()));

        this.collection.load('notes', 'all', query);
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        switch (this.props.navigation.view) {
            case 'all':
                return app.view.content.component.boards();
            case 'board':
            case 'board-search':
                return app.view.content.component.lists({
                    board: app.navigation.data.board
                });
            case 'list':
            case 'list-search':
                if (!this.state.loaded) return app.view.content.component.loading();

                return app.view.content.component.notes({
                    collection: this.collection,
                    model: this.model,
                    context: 'note',
                    showNew: app.navigation.view === 'list'
                });
        }
    },
    resetDefaults: function () {
        var listModel = app.data.boards.get(app.navigation.data.board).get('lists').get(app.navigation.data.list);

        var data;

        if (listModel.getOptions('addToInbox')) {
            data = {
                _data: {
                    status: 'inbox'
                }
            }
        }

        this.model.setDefaults('note', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;

        if (app.navigation.data.board && app.navigation.data.list) {

            var listModel = app.data.boards.get(app.navigation.data.board).get('lists').get(app.navigation.data.list);

            var query = _.map(listModel.data('tags'), function (tag) {
                return {
                    type: 'branch',
                    query: tag
                }
            });

            if (query && (nav.view === 'list')) {
                return _.map(query, function (queryItem) {
                    return {
                        _id: queryItem.query
                    };
                });
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
});