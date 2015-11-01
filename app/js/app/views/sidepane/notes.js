app.view.sidepane.notes = app.lib.element({
    displayName: 'sidepane.notes',
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
        app.data.tags.on('add remove change sync', this.forceUpdate.bind(this, null), this);
        this.restoreSearch();
    },
    componentWillUnmount: function () {
        app.data.tags.off(null, null, this);
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
    //adds extra props to properties passed to "app.view.sidepane.component.item"
    extendItemOptions: function (options) {
        options.click = this.onItemClick.bind(this, options.view);
        options.selected = (options.view === app.navigation.view || (app.navigation.query && options.view === app.navigation.view + '/' + app.navigation.query.raw()));
        return options;
    },
    //change rout when item is clicked
    onItemClick: function (view, event) {
        app.router.navigate('notes/' + view, { trigger: true, replace: true });
    },

    onSearchChanged: function (filter) {
        if (filter === null) {
            this.setState({
                filter: filter
            });
            if (app.navigation.query.text().length > 0) {
                app.router.navigate('notes/inbox', { trigger: true, replace: true });
            }
        } else {
            this.setState({
                filter: filter
            });
        }
    },
    onSearchSubmit: function () {
        if (this.state.filter) {
            app.router.navigate('notes/search/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
        }
    },
    getFilter: function () {
        return app.navigation.query.text().length === 0 ? this.state.filter : null;
    },

    render: function () {
        return (
            React.DOM.div({ className: window.classnames({ 'sidepane': true, 'showsearch': this.props.showSearch }) },
                React.DOM.div({ className: 'sidepanecontent scroll noselect' },
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'Inbox', icon: 'icon-inbox', view: 'inbox' })),
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trackables', icon: 'icon-spinner', expanded: true, view: 'trackers' }),
                        app.view.sidepane.component.trackers({
                            root: 'notes/trackers',
                            active: ('trackers' === app.navigation.view),
                            filter: this.getFilter()
                        })
                    ),
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'All notes', icon: 'icon-folder-open', expanded: true, view: 'all' }),
                        app.view.sidepane.component.tags({
                            tree: app.data.tags.reduceTree(app.data.tags.getTree()),
                            active: ('all' === app.navigation.view),
                            filter: this.getFilter()
                        })
                    ),
                    app.view.sidepane.component.item({ text: 'More', icon: 'icon-folder', expanded: true },
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Untagged', icon: 'icon-tags', view: 'untagged' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Archive', icon: 'icon-archive', view: 'archive' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trash', icon: 'icon-trash-alt', view: 'trash' }))
                    ),
                    app.view.sidepane.component.item({ text: 'Filters', icon: 'icon-filter', expanded: false },
                        app.view.sidepane.component.item({ text: 'Type', icon: 'icon-folder', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Text block', icon: 'icon-font', view: 'all/type:text' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Check list', icon: 'icon-check', view: 'all/type:list' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Link & image', icon: 'icon-link', view: 'all/type:link' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Numeric', icon: 'icon-sort-numeric', view: 'all/type:numeric' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Stopwatch', icon: 'icon-stopwatch', view: 'all/type:stopwatch' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Countdown', icon: 'icon-hourglass', view: 'all/type:countdown' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Choice', icon: 'icon-list-bullet', view: 'all/type:choice' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Group', icon: 'icon-marquee', view: 'all/type:group' }))
                        ),
                        app.view.sidepane.component.item({ text: 'Color', icon: 'icon-art-gallery', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Red', icon: 'icon-blank', view: 'all/color:red', color: app.config.colors.map['red'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Orange', icon: 'icon-blank', view: 'all/color:orange', color: app.config.colors.map['orange'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Yellow', icon: 'icon-blank', view: 'all/color:yellow', color: app.config.colors.map['yellow'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Green', icon: 'icon-blank', view: 'all/color:green', color: app.config.colors.map['green'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Cyan', icon: 'icon-blank', view: 'all/color:cyan', color:app.config.colors.map['cyan'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Blue', icon: 'icon-blank', view: 'all/color:blue', color:app.config.colors.map['blue'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Lilac', icon: 'icon-blank', view: 'all/color:lilac', color:app.config.colors.map['lilac'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Grey', icon: 'icon-blank', view: 'all/color:grey', color:app.config.colors.map['grey'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'White', icon: 'icon-blank', view: 'all/color:white', color:app.config.colors.map['white'] }))
                        )
                    )
                ),
                this.props.showSearch ? app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: this.state.isSearch,
                    placeholder: 'Filter tags | Search'
                }) : null
            )
        );
    }
});