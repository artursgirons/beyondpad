app.view.sidepane.component.tags = app.lib.element({
    displayName: 'sidepane.component.tags',
    mixins: [app.lib.mixins.rootParent],
    getDefaultProps: function () {
        return {
            filter: null,
            tree: [],
            active: false, // active is to refresh expander when tags are selected
            rootParent: null // to get rootParent of recursively nested components
        }
    },
    getInitialState: function () {
        if (this.isRootParent()) {
            return {
                hasChecked: false,
                parents: null,
                tags: {
                    visible: null,
                    filtered: null
                }
            }
        } else {
            return {
                parents: null,
                tags: {
                    visible: null,
                    filtered: null
                }
            };
        }
    },
    componentWillMount: function () {
        this.refreshExpander(this.props, true);
    },
    componentDidMount: function () {
        this.rootParent().expandedTagHash = _.clone(this.rootParent()._expandedTagHash);
        this.rootParent().skipUpdate = false;
    },
    componentDidUpdate: function () {
        this.rootParent().expandedTagHash = _.clone(this.rootParent()._expandedTagHash);
        this.rootParent().skipUpdate = false;
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.isRootParent()) {
            this.rootParent().forceExpander = (this.props.filter !== nextProps.filter) && nextProps.filter;

            //if (true) { // refresh expanders always
            if (!this.rootParent().skipUpdate || this.props.filter !== nextProps.filter) { // refresh expanders only on navigate
                if (nextProps.filter) {
                    this.refreshExpanderFilter(nextProps);
                } else {
                    this.refreshExpander(nextProps, this.props.filter !== nextProps.filter);
                }
            } else {
                this.expandedTagHash = {};
                this._expandedTagHash = {};
            }
        }
    },
    hasChecked: function () {
        return this.state.hasChecked || (app.navigation.query && app.navigation.query.tags().length > 1);
    },
    onClick: function (_id, event) {
        this.rootParent().skipUpdate = true;

        this.rootParent().setState({
            hasChecked: false
        });
        app.router.navigate(app.navigation.page + '/' + 'all' + '/' + 'branch:' + _id, { trigger: true, replace: true });
    },
    onCheck: function (_id, event) {
        if (this.isRootParent()) {

            this.rootParent().skipUpdate = true;

            event.preventDefault();
            event.stopPropagation();

            if (!this.hasChecked()) {
                this.setState({ hasChecked: true }, function () {
                });
                app.router.navigate(app.navigation.page + '/' + 'all' + '/' + 'branch:' + _id, { trigger: true, replace: true });
            } else {
                var deselectTag = _.find(app.navigation.query.tags(), function (queryItem) {
                    return queryItem.query === _id;
                });

                if (deselectTag) {
                    if (app.navigation.query.tags().length > 1) {
                        app.navigation.query.all().splice(app.navigation.query.all().indexOf(deselectTag), 1);
                    } else {
                        this.setState({ hasChecked: false });
                        return;
                    }
                } else {
                    app.navigation.query.all().push({
                        type: 'branch',
                        query: _id
                    });
                }

                var query = _.reduce(app.navigation.query.tags(), function (memo, item) {
                    return memo + '&' + item.type + ':' + item.query
                }, '').slice(1);

                app.router.navigate(app.navigation.page + '/' + 'all' + '/' + query, { trigger: true, replace: true });
            }
        } else {
            return this.rootParent().onCheck(_id, event);
        }
    },
    refreshExpander: function (props, force) {
        if (this.isRootParent() && (props.active || force)) { // active is to refresh expander when tags are selected
            this.expandedTagHash = app.data.tags.getParents(_.map(app.navigation.query.tags(), function (item) { return item.query }));
            this._expandedTagHash = _.clone(this.expandedTagHash);
            this.setState({
                tags: {
                    visible: null,
                    filtered: null
                }
            });
        }
    },
    //TODO: add debounce, but in complience with "trackers component" to be streamilned
    refreshExpanderFilter: function (props) {
        if (this.isRootParent() && props.filter) {
            var filter = props.filter.toLowerCase();

            var filteredTags = _.filter(app.data.tags.models, function (tag) {
                return app.lib.searchText(tag.data('tag').name.toLowerCase(), filter);

                //var words = _.words(tag.data('tag').name.toLowerCase());

                //return !!_.find(words, function (word) {
                //    return _.startsWith(word, filter);
                //});
            }, this);

            var filteredIds = _.map(filteredTags, function (item) { return item.get('_id') });

            this.expandedTagHash = app.data.tags.getParents(filteredIds);
            this._expandedTagHash = _.clone(this.expandedTagHash);

            var parentsIds = _.keys(this.expandedTagHash);

            var mergedTags = [].concat(filteredIds, parentsIds);

            this.setState({
                tags: {
                    visible: _.object(mergedTags, mergedTags),
                    filtered: filteredIds
                }
            });
        }
    },
    isExpanded: function (id) {
        if (this.isRootParent()) {
            if (this.expandedTagHash) {
                if (this.expandedTagHash[id]) {
                    // agains recursion
                    this.expandedTagHash[id] = false;
                    return true;
                } else {
                    if (typeof (this.expandedTagHash[id]) === 'undefined' && app.data.tags.get(id).getOptions('autoExpand')) {
                        this.expandedTagHash[id] = true;
                        return true;
                    }

                    return false;
                }
            } else {
                return false;
            }
        }
    },
    isVisible: function (id) {
        if (this.isRootParent()) {
            var visible = app.data.tags.get(id).isActive();

            if (this.state.tags.visible) {
                var show = _.intersection(app.data.tags.getTree(false)[id].up, this.state.tags.filtered).length > 0
                return visible && (!!this.state.tags.visible[id] || show);
            } else {
                return visible;
            }
        }
    },
    isChildrenVisible: function (id) {
        if (this.isRootParent()) {
            var status = app.data.tags.get(id).data('status');
            var visible = status === 'all' || status === 'inbox';

            if (this.state.tags.visible) {
                var show = _.intersection(app.data.tags.getTree(false)[id].up, this.state.tags.filtered).length > 0
                return visible && show;
            } else {
                return visible;
            }
        }
    },
    //TODO: add "Nothing found" message if rootParent has no items
    //TODO: replace "key:id" with something shorter like "lib.cid()"
    render: function () {
        return (
            React.DOM.div(null,
                _.map(this.props.tree, function (treeItem) {
                    var tag = treeItem.tag;
                    var id = app.data.tags.get(tag).get('_id');

                    var childrenVisible = this.props.isChildrenVisible || this.rootParent().isChildrenVisible(id);
                    var visible = (this.rootParent().isVisible(id) || childrenVisible) && app.data.tags.get(id).isActive();

                    if (visible) {

                        var newTree = _.reduce(treeItem.down, function (memo, subTag) {
                            memo[subTag] = app.data.tags.getTree(false)[subTag];
                            return memo;
                        }, {});

                        newTree = app.data.tags.treeToArray(newTree);

                        var isSelected = this.props.active && !!_.find(app.navigation.query.tags(), function (queryItem) { return queryItem.query === id });

                        return app.view.sidepane.component.checkitem(
                            {
                                key: app.lib.uidmap(id),
                                text: app.data.tags.get(tag).data('tag').name,
                                icon: 'icon-blank',
                                color: app.lib.color(app.data.tags.get(tag).data('color')),
                                click: this.onClick.bind(this, id),
                                toggle: this.onCheck.bind(this, id),
                                checked: this.rootParent().hasChecked() && isSelected,
                                expanded: this.rootParent().isExpanded(id),
                                forceExpanded: this.rootParent().forceExpander,
                                visible: visible,
                                selected: isSelected
                            },
                            treeItem.down.length > 0 ? app.view.sidepane.component.tags({
                                tree: newTree,
                                rootParent: this.props.rootParent || this,
                                active: this.props.active,
                                isChildrenVisible: childrenVisible
                            }) : null
                        );
                    } else {
                        return null
                    }
                }, this)
            )
        );
    }
});