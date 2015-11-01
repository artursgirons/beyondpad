app.collection.notes = Backbone.Collection.extend({
    url: '/api/notes',

    model: app.model.note,

    initialize: function (models, options) {
        this.options = {
            context: options.context
        }
    },

    comparator: function (model) {
        return -model.data(this.options.context).order;
    },

    unload: function () {
        this.reset(null, { silent: true });
        this.trigger('unloaded');
    },

    load: function (page, view, query) {
        this.unload();

        switch (page) {
            case 'trackers':
                if (view === 'all' || view === 'search') {
                    this.options.context = 'note'
                } else {
                    this.options.context = 'tracker'
                }
                break;
        }

        this.req = {
            page: page,
            view: view,
            query: app.lib.parseQuery(query)
        }

        return app.dataadapter.generic.load(this.url, this.req).done(function (data) {
            this.reset(_.map(data, function (item) { return app.model.note.parse(item); }), { silent: true });
            this.trigger('loaded');
        }.bind(this));
    },

    updateNotes: function (url, req) {
        return app.dataadapter.generic.update(url, req).done(function (responseData) {
            var inContextData = app.dataadapter.local.filter(this.req, responseData);

            var notesUpdate = _.map(inContextData, function (item) { return app.model.note.parse(item); });

            var models = this.add(notesUpdate, { merge: true });
            _.each(models, function (model) {
                model.trigger('batch:model');
            });

            var notesRemove = _.map(_.difference(_.pluck(responseData, '_id'), _.pluck(inContextData, '_id')), function (id) { return this.get(id); }.bind(this));
            this.remove(notesRemove, { silent: true });

            this.trigger('batch:collection', responseData);

        }.bind(this));
    },

    removeNotes: function (req) {
        return app.dataadapter.generic.remove(req).done(function () {
            var notesRemove = _.map(req.ids, function (id) { return this.get(id); }, this);
            this.remove(notesRemove, { silent: true });
            this.trigger('batch:collection');
        }.bind(this));
    }
});