app.view.sidepane.boards = app.lib.element({
    displayName: 'sidepane.boards',
    getDefaultProps: function () {
        return {
            showSearch: true
        }
    },
    getInitialState: function () {
        return {
            filter: null,
            isSearch: false
        }
    },
    componentWillMount: function () {
        app.data.boards.on('add remove change sync', this.forceUpdate.bind(this, null), this);
        this.restoreSearch();
    },
    componentWillUpdate: function () {
        app.data.boards.sort();
    },

    componentWillUnmount: function () {
        app.data.boards.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
        this.restoreSearch();
    },

    //get text query from url and set as current filter state
    restoreSearch: function () {
        if (app.navigation.query.text().length > 0) {
            this.setState({
                filter: _.pluck(app.navigation.query.text(), 'query').join(' '),
                isSearch: app.navigation.query.text().length > 0
            });
        } else {
            if (this.state.isSearch) {
                this.setState({
                    filter: null,
                    isSearch: false
                });
            }
        }
    },

    onSearchChanged: function (filter) {
        if (filter === null) {
            this.setState({
                filter: filter
            });
            if (app.navigation.query.text().length > 0) {
                if (app.navigation.data.board && app.navigation.data.list) {
                    app.router.navigate('boards/' + app.navigation.data.board + '/' + app.navigation.data.list, { trigger: true, replace: true });
                } else {
                    if (app.navigation.data.board) {
                        app.router.navigate('boards/' + app.navigation.data.board, { trigger: true, replace: true });
                    }
                }
            }
        } else {
            this.setState({
                filter: filter
            });
        }
    },
    onSearchSubmit: function () {
        if (this.state.filter) {
            if (app.navigation.data.board && app.navigation.data.list) {
                app.router.navigate('boards/' + app.navigation.data.board + '/' + app.navigation.data.list + '/all/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
            } else {
                if (app.navigation.data.board) {
                    app.router.navigate('boards/' + app.navigation.data.board + '/all/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
                }
            }
        }
    },
    getFilter: function () {
        return app.navigation.query.text().length === 0 ? this.state.filter : null;
    },

    showAllBoards: function () {
        app.router.navigate('boards', { trigger: true });
    },
    showBoard: function (_board) {
        app.router.navigate('boards/' + _board, { trigger: true });
    },
    showList: function (_board, _list) {
        app.router.navigate('boards/' + _board + '/' + _list, { trigger: true });
    },
    render: function () {
        var boardsFiltered;

        if (this.getFilter()) {
            boardsFiltered = _.filter(app.data.boards.models, function (board) {
                var boardMatch = app.lib.searchText(board.get('name'), this.getFilter());
                var listMatch = !!_.find(board.get('lists').models, function (list) {
                    return app.lib.searchText(list.data('name'), this.getFilter());
                }, this);
                return boardMatch || listMatch;
            }, this)
        } else {
            boardsFiltered = app.data.boards.models;
        }

        return (
            React.DOM.div({ className: window.classnames({ 'sidepane': true, 'showsearch': this.props.showSearch }) },
                React.DOM.div({ className: 'sidepanecontent scroll noselect' },
                    app.view.sidepane.component.item({
                        text: 'Boards',
                        icon: 'icon-folder-open',
                        expanded: true,
                        click: this.showAllBoards,
                        selected: app.navigation.page === 'boards'
                    },
                        _.map(boardsFiltered, function (board) {
                            return app.view.sidepane.component.item({
                                key: app.lib.uidmap(board.get('_id')),
                                text: board.get('name'),
                                icon: 'icon-books',
                                expanded: true,
                                click: this.showBoard.bind(this, board.get('_id')),
                                selected: app.navigation.data.board === board.get('_id')
                            },
                                _.map(board.get('lists').models, function (list) {
                                    if (!this.getFilter() || app.lib.searchText(list.data('name'), this.getFilter())) {

                                        //TODO: save color to list itself
                                        var color = (function () {
                                            var tags = list.data('tags');

                                            if (tags.length > 0) {
                                                var tag = app.data.tags.get(tags[tags.length - 1]);
                                                if (tag) {
                                                    return app.lib.color(tag.data('color'));
                                                }
                                            }

                                            return null;
                                        })();

                                        return app.view.sidepane.component.item({
                                            key: app.lib.uidmap(list.get('_id')),
                                            text: list.data('name'),
                                            icon: 'icon-bookmark',
                                            color: color,
                                            click: this.showList.bind(this, board.get('_id'), list.get('_id')),
                                            selected: app.navigation.data.list === list.get('_id')
                                        });
                                    }
                                }, this)
                            );
                        }, this)
                    )
                ),
                this.props.showSearch ? app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: this.state.isSearch,
                    placeholder: 'Filter lists | Search'
                }) : null
            )
        );
    }
});