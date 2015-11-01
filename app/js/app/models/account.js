app.model.account = Backbone.Model.extend({
    urlRoot: '/api/account',
    idAttribute: "_id",
    initialize: function () {
        this.on('change sync', function () {
            if (this.get('_id')) {
                this.buildTagLinkHash();
            }
        });
    },
    defaults: {
        _id: null,
        _data: {
            email: null,
            name: null,
            options: {
            }
        }
    },
    defaultOptions: {
        tagLinks: [[]],
        maxColumnCount: 100,
        noteLayout: 'masonry'
    },

    getOptions: function (field) {
        if (field) {
            return (this.data('options') && typeof (this.data('options')[field]) !== 'undefined') ? this.data('options')[field] : this.defaultOptions[field];
        } else {
            return $.extend(true, {}, this.defaultOptions, this.data('options'));
        }
    },

    setOptions: function (name, value) {
        var update = {};
        update[name] = { $set: value };
        this.update('options', update);
    },

    buildTagLinkHash: function () {
        var tagLinkHash = this.tagLinkHash = {};

        _.each(this.get('tagLinks').models, function (taglink) {
            var tags = taglink.data('tags');
            _.each(tags, function (tag) {
                tagLinkHash[tag] = tags;
            })
        });
    },

    fetch: function () {
        if (app.demo) {
            this.set(this.parse(app.demo.account));
            var deferred = $.Deferred();
            deferred.resolve(app.demo.account);
            return deferred;
        } else {
            var f = Backbone.Model.prototype.fetch.apply(this, arguments);
            return f;
        }
    },

    save: function () {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve(this.parse(this.toJSON()));
            return deferred;
        } else {
            var f = Backbone.Model.prototype.save.apply(this, arguments);
            return f;
        }
    },

    parse: function (response) {
        if (response._data) {
            var tagLinks = (response._data.options && response._data.options.tagLinks) || [];
            tagLinks = _.map(tagLinks, function (tags) { return { _data: { tags: tags } } });
            var Coll = Backbone.Collection.extend({ model: app.model.dataModel });
            response.tagLinks = new Coll(tagLinks);
            return response;
        } else {
            return {}
        }
    },

    toJSON: function () {
        var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
        var tagLinks = _.map(this.get('tagLinks').models, function (taglink) {
            return taglink.data('tags');
        });

        delete json.tagLinks;
        json._data.options = json._data.options || {};
        json._data.options.tagLinks = tagLinks;

        return json;
    },

    data: function (context) {
        if (context) {
            return this.get('_data')[context];
        }
        else {
            return this.get('_data');
        }
    },
    update: function () {
        if (typeof (arguments[0]) === 'string') {
            this._update.apply(this, arguments);
        }
        else {
            this._update.call(this, null, arguments[0], arguments[1]);
        }
    },
    _update: function (context, update, silent) {
        if (context) {
            var temp = {};
            temp[context] = update;
            update = temp;

            this.get('_data')[context] = this.get('_data')[context] || {};
        }

        this.set('_data', React.addons.update(this.get('_data'), update), { silent: silent });
        if (!silent) {
            var routes = this.commandRoutes(update, true);
            this.trigger(routes.change.join(' '));
            this.trigger(routes.update.join(' '));
        }
    },
    commandRoutes: function (update, prefix, root) {
        var path, nested, result = { change: [], update: [] };
        for (var field in update) {
            if (update.hasOwnProperty(field)) {
                if (field[0] === '$') {
                    result.update.push(prefix ? 'update:' + root : root);
                }
                else {
                    path = root ? root + '.' + field : field;
                    result.change.push(prefix ? 'change:' + path : path);
                    nested = this.commandRoutes(update[field], prefix, path);
                    result.change = result.change.concat(nested.change);
                    result.update = result.update.concat(nested.update);
                }
            }
        }
        return result;
    }
});