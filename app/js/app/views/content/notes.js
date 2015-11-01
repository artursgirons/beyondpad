app.view.content.notes = app.lib.element({
    displayName: 'content.notes',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: 'note' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.collection.on('unloaded', this.onDataUnloaded, this);
        this.resetDefaults();
        this.collection.load('notes', this.props.navigation.view, this.props.navigation.query.all());
    },
    componentWillReceiveProps: function (nextProps) {
        this.collection.load('notes', nextProps.navigation.view, nextProps.navigation.query.all());
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentDidMount: function () {
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
        if (!this.state.loaded) {
            return app.view.content.component.loading();
        }

        var nav = this.props.navigation;
        return app.view.content.component.notes({
            collection: this.collection,
            model: this.model,
            context: 'note',
            showNew: nav.view === 'inbox' || nav.view === 'all' || (nav.view === 'trackers' && nav.query.tags().length > 0)
        });
    },
    resetDefaults: function () {
        var data;

        if (this.props.navigation.view === 'inbox') {
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