app.view.content.tags = app.lib.element({
    displayName: 'content.tags',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: 'tag' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.collection.on('unloaded', this.onDataUnloaded, this);
        this.resetDefaults();
        this.collection.load('tags', this.props.navigation.view, this.props.navigation.query.all());
    },
    componentWillReceiveProps: function (nextProps) {
        this.collection.load('tags', nextProps.navigation.view, nextProps.navigation.query.all());
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
    onDataUnloaded: function () {
        this.setState({
            loaded: false
        });
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        if (!this.state.loaded) return app.view.content.component.loading();

        if (this.props.navigation.view === 'graph') {
            return app.view.content.component.graph();
        }
        else {
            var nav = this.props.navigation;
            return app.view.content.component.notes({
                collection: this.collection,
                model: this.model,
                context: 'tag',
                showNew: nav.view === 'all'
            });
        }
    },
    reload: function () {
        this.collection.load('tags', this.props.navigation.view, this.props.navigation.query.all());
    },
    resetDefaults: function () {
        var data;

        this.model.setDefaults('tag', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;
        if (nav.query) {
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