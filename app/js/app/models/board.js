app.model.board = Backbone.Model.extend({
    urlRoot: '/api/board',
    idAttribute: "_id",
    initialize: function () {
    },
    defaults: function () {
        return app.model.board.parse({
            name: '',
            order: 0,
            color: 'white',
            _data: {},
            lists: []
        });
    },
    parse: function (response) {
        return app.model.board.parse(response);
    },
    toJSON: function () {
        return app.model.board.toJSON(this);
    },
    updatePosition: function (order) {
        this.set('order', order);
        this.save();
    },
    save: function () {
        if (app.demo) {
            var deferred = $.Deferred();
            var data = this.parse(app.lib.extendDemoObject(this.toJSON()));

            this.set(data)
            deferred.resolve(data);

            return deferred;
        } else {
            return Backbone.Model.prototype.save.apply(this, arguments);
        }
    },
    destroy: function () {
        if (app.demo) {
            app.data.boards.remove(this);
        } else {
            return Backbone.Model.prototype.destroy.apply(this, arguments);
        }
    }
}, {
    parse: function (response) {
        return {
            _id: response._id,
            name: response.name,
            order: response.order,
            color: response.color,
            _data: response._data,
            lists: new app.collection.lists(response.lists)
        };
    },
    toJSON: function (model) {
        return {
            _id: model.get('_id'),
            name: model.get('name'),
            order: model.get('order'),
            color: model.get('color'),
            _data: model.get('_data'),
            lists: _.map(model.get('lists').models, function (list) {
                return list.toJSON();
            })
        }
    }
});