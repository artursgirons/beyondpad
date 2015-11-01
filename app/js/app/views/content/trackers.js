app.view.content.trackers = app.lib.element({
    displayName: 'content.trackers',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: app.navigation.view === 'all' ? 'note' : 'tracker' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.resetDefaults();
        this.collection.load('trackers', this.props.navigation.view, this.props.navigation.query.all());
    },
    componentWillReceiveProps: function (nextProps) {
        this.collection.load('trackers', nextProps.navigation.view, nextProps.navigation.query.all());
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentDidMount: function () {
        app.events.trigger('context:notes:init', { reload: this.reload });
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resetDefaults();
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        if (!this.state.loaded) return app.view.content.component.loading();

        var nav = this.props.navigation;
        return app.view.content.component.notes({
            collection: this.collection,
            model: this.model,
            context: ((app.navigation.view === 'all' || app.navigation.view === 'search') ? 'note' : 'tracker'),
            showNew: nav.view === 'manage' || (nav.view === 'all' && nav.query.tags().length > 0)
        });
    },
    reload: function () {
        this.collection.load('trackers', this.props.navigation.view, this.props.navigation.query.all());
    },
    resetDefaults: function () {
        if (this.props.navigation.view === 'all') {
            this.model.setDefaults('note', this.getTags());
        }
        else {
            this.model.setDefaults('tracker', this.getTags());
        }
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;
        if (nav.query && (nav.view === 'all' || nav.view === 'manage')) {
            return _.map(nav.query.tags(), function (queryItem) {
                return {
                    _id: queryItem.query
                };
            });
        } else {
            return null;
        }
    }
});