app.dataadapter.generic = {
    options: {
        localStorage: true
    },
    preload: function () {
        if (app.demo) {
            var deferred = $.Deferred();
            app.dataadapter.local.update(app.demo.notes);
            deferred.resolve();
            return deferred;
        } else {
            if (this.options.localStorage) {
                return app.dataadapter.remote.load('/api/notes', { page: 'all' }).done(function (response) {
                    app.dataadapter.local.update(response);
                });
            } else {
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred;
            }
        }
    },
    load: function (url, req, method) {
        if (app.demo) {
            return app.dataadapter.local.load(url, req, method);
        } else {
            if (this.options.localStorage) {

                // if there is no local data then load all entities from server then return query from local storage
                if (!app.dataadapter.local.data.array) {
                    var deferred = $.Deferred();
                    app.dataadapter.remote.load('/api/notes', { page: 'all' }).done(function (response) {
                        app.dataadapter.local.update(response);
                        app.dataadapter.local.load(url, req, method).done(function (data) {
                            deferred.resolve(data);
                        }).fail(function () {
                            deferred.reject.apply(deferred, arguments);
                        });
                    }).fail(function () {
                        deferred.reject.apply(deferred, arguments);
                    });

                    return deferred;
                } else {
                    return app.dataadapter.local.load(url, req, method);
                }
            } else {
                return app.dataadapter.remote.load(url, req, method);
            }
        }
    },
    save: function (url, req, method) {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve(app.lib.extendDemoObject(req));
        } else {
            var deferred = app.dataadapter.remote.save(url, req, method);
        }

        // update local storage
        if (this.options.localStorage) {
            deferred.done(function (result) {
                app.dataadapter.local.update([result]);
            });
        }

        // update app.data.tags collection if entity that is saved is a tag
        deferred.done(function (result) {

            var t = app.data.tags.get(result._id);

            if (result._data.tag) {
                app.data.tags.add(app.model.tag.parse(result), { merge: true });
            }
        });

        return deferred;
    },
    update: function (url, req, method) {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve(app.dataadapter.local.updateActionExecute(url, req));
        } else {
            var deferred = app.dataadapter.remote.update(url, req, method);
        }

        // update local storage
        if (this.options.localStorage) {
            deferred.done(function (results) {
                app.dataadapter.local.update(results);
            });
        }

        // update app.data.tags collection if entity that is saved is a tag
        deferred.done(function (results) {
            var tags = [];
            _.each(results, function (result) {
                if (result._data.tag) {
                    tags.push(app.model.tag.parse(result));
                }
            });
            app.data.tags.add(tags, { merge: true });
        });

        return deferred;
    },
    remove: function (req) {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve([]);
        } else {
            var deferred = app.dataadapter.remote.remove('/api/notes/remove', req);
        }

        if (this.options.localStorage) {
            deferred.done(function (results) {
                app.dataadapter.local.remove(req.ids);

                var tags = [];
                _.each(req.ids, function (id) {
                    var tag = app.data.tags.get(id);
                    if (tag) {
                        tags.push(tag);
                    }
                });
                app.data.tags.remove(tags);

            }.bind(this));
        }

        return deferred;
    }
}