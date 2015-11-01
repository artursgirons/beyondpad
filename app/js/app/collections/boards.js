app.collection.boards = Backbone.Collection.extend({
    url: '/api/boards',
    model: app.model.board,
    load: function () {
        if (app.demo) {
            var data = app.demo.boards;

            var deferred = $.Deferred();
            deferred.resolve(data);

            this.reset(_.map(data, function (item) { return app.model.board.parse(item); }), { silent: true });

            return deferred;
        } else {
            return this.fetch();
        }
    },
    comparator: function (model) {
        return -model.get('order');
    }
});