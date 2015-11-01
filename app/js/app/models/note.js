app.model.note = Backbone.Model.extend({
    urlRoot: '/api/note',
    idAttribute: "_id",
    constructor: function () {
        return Backbone.Model.apply(this, arguments);
    },
    initialize: function (options) {
        this.updateKey();
    },
    setDefaults: function (context, tags, data) {
        this.defaults = app.model.note.defaults.get(context, tags, data, this);
    },
    data: function (context) {
        if (context) {
            return this.get('_data')[context];
        }
        else {
            return this.get('_data');
        }
    },
    updateKey: function () {
        this.key = app.lib.uidmap(this.get('_id') || app.lib.uid());
    },
    reset: function (options) {
        this.clear({ silent: true });
        //TODO:check why it happens so that error "this.defaults is not a function" happens
        this.set(this.defaults(), { silent: true });
        this.trigger('reset');
    },
    tags: function () {
        return _.filter(this.data('tags'), function (tag) {
            var model = app.data.tags.get(tag._id);
            return model && model.data('status') !== 'trash';
        });
    },
    getStatus: function () {
        var link = this.getLinkedTag();

        if (link.tag) {
            if (link.valid) {
                return 'link';
            } else {
                return 'error';
            }
        }
        return null;
    },
    isChanged: function () {
        return !_.isEqual(this.originalJson, this.attributes);
    },
    getLinkedTag: function () {
        var tag = _.find(app.data.tags.models, function (tag) { return this.data('tag') && tag.data('tag').name.toLocaleLowerCase() === this.data('tag').name.toLocaleLowerCase() && tag.get('_id') !== this.get('_id'); }, this);
        if (tag) {
            if (true) {
                if (this.data('note') && !tag.data('note') || this.data('tracker') && !tag.data('tracker')) {
                    return {
                        tag: tag,
                        valid: true
                    }
                }
            }
            return {
                tag: tag,
                valid: false
            }
        }

        return {
            tag: null,
            valid: true
        }
    },
    duplicate: function (context) {
        var data = this.toJSON();
        delete data._id;
        data._data[context].order -= 1000;

        var clone = new app.model.note(app.model.note.parse(data));

        this.collection.add(clone);
        clone.save(context);
    },
    save: function (context, options) {
        var link = this.getLinkedTag();

        if (link.tag) {
            var data = this.clone();
            this.set(app.model.note.parse(link.tag.toJSON()));

            this.data()[context] = data.data()[context];
            this.data()['status'] = data.data()['status'];
            this.data()['tags'] = _.reduce(this.data('tags').concat(data.data('tags')), function (memo, tag) {
                if (!_.find(memo, function (memoTag) { return memoTag._id === tag._id })) {
                    memo.push(tag);
                }
                return memo;
            }, [], this);

            if (data.isNew()) {
                return this.save.apply(this, arguments);
            } else {
                var tag = app.data.tags.get(data.get('_id'))
                if (tag) {
                    delete tag.data()[context];

                    var deferred = $.Deferred();

                    $.when(
                        this.save.apply(this, arguments),
                        tag.save('tag')
                    ).done(function (r1, r2) {
                        deferred.resolve(r1[0]);
                    });

                    return deferred;
                } else {
                    var deferred = $.Deferred();

                    $.when(
                        this.save.apply(this, arguments),
                        app.dataadapter.generic.remove({ ids: [data.get('_id')] })
                    ).done(function (r1, r2) {
                        deferred.resolve(r1[0]);
                    });

                    return deferred;
                }
            }
        } else {
            var tag = app.data.tags.get(this.get('_id'));

            if (tag && !this.data('tag')) {
                var deferred = $.Deferred();

                delete tag.data()[context];

                switch (context) {
                    case 'note':
                        this.unset('_id', { silent: true });

                        $.when(
                            this.save.apply(this, arguments),
                            tag.save('tag')
                        ).done(function (r1, r2) {
                            deferred.resolve(r1[0]);
                        });

                        break;
                    case 'tracker':
                        $.when(
                            tag.save('tag')
                        ).done(function (r1) {
                            deferred.resolve(r1[0]);
                        });

                        break;
                }

                return deferred;
            } else {

                _.each(this.data(context).items, function (item) {
                    var text = '';
                    switch (item.type) {
                        case 'text':
                            text = item.data.text;
                            break;
                        case 'choice':
                        case 'list':
                            text = _.reduce(item.data.items, function (str, item) {
                                return str + ' ' + (item.text || '');
                            }, '');
                            break;
                        case 'link':
                            text = (item.data.link || '') + ' ' + (item.data.title || '');
                            break;
                        case 'numeric':
                            text = (item.data.value + '' || '');
                            break;
                    }
                    item.data.text = text;
                });

                return app.dataadapter.generic.save(this.url(), this.toJSON(), (this.isNew() ? 'POST' : 'PUT')).done(function (data) {
                    log('send', 'event', 'entity', 'save', context);

                    var collection = this.collection;

                    if (!this.isNew()) {
                        if (collection) {
                            var filtered = app.dataadapter.local.filter(collection.req, [data]);

                            if (filtered.length === 0) {
                                collection.remove(this);
                            }
                        }
                    }

                    this.set(this.parse(data));
                    this.trigger('update:model', data);

                    if (collection) {
                        collection.trigger('update:model', data);
                    }
                }.bind(this));
            }
        }
    },
    parse: function (response) {
        return app.model.note.parse(response);
    },
    toJSON: function (options) {
        var result = $.extend(true, {}, Backbone.Model.prototype.toJSON.apply(this, arguments));

        if (result._data.options && app.lib.isEmpty(result._data.options)) {
            delete result._data.options;
        };

        if (!result._data.status) {
            result._data.status = 'all';
        }

        if (result._data.tags && app.lib.isEmpty(result._data.tags)) {
            delete result._data.tags;
        };

        return result;
    },
    clear: function () {
        this.updateKey();
        return Backbone.Model.prototype.clear.apply(this, arguments);
    },
    setTag: function () {
        this.update({
            tag: {
                $set: {
                    name: '',
                    order: 0
                }
            },
            color: {
                $set: app.lib.randomColor()
            }
        });
    },
    removeTag: function () {
        this.update({
            tag: {
                $set: null
            },
            color: {
                $set: 'white'
            }
        });
    },
    appendTag: function (tagId, context, silent) {
        if (context === 'note') {
            this.set({
                '_data': app.model.note.addTagToData(this.data(), tagId)
            }, { silent: true });

            this.updateChoice(context, silent);

            this.trigger('update:color');

        } else {
            this.update({
                tags: { $push: [{ _id: tagId }] }
            }, silent);

            this.updateChoice(context, silent);
        }
    },
    deleteTag: function (tagId, context, silent) {
        var tags = _.pluck(this.data('tags'), '_id');

        if (tags.indexOf(tagId) >= 0) {
            this.update({
                tags: {
                    $splice: [[tags.indexOf(tagId), 1]]
                }
            }, silent);

            if (app.data.tags.get(tagId).data('tracker')) {
                var trackerItem = _.find(this.data(context).items, function (item) {
                    return item.data.trackerId === tagId;
                });

                if (trackerItem) {
                    this.removeItem(context, trackerItem.uid, silent);
                }
            }

            this.updateChoice(context, silent);
        }
    },
    updateChoice: function (context, silent) {
        if (context === 'note' || context === 'tracker') {

            var data = app.model.note.updateChoiceData(this.data());

            this.update(context, {
                items: { $set: _.clone(data[context].items) }
            }, silent);
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
        }

        this.set({
            '_data': React.addons.update(this.get('_data'), update)
        }, { silent: silent });

        if (!silent) {
            var routes = this.commandRoutes(update, true);
            this.trigger(routes.change.join(' '));
            this.trigger(routes.update.join(' '));
        }
    },
    getOptions: function (field) {
        if (field) {
            return (this.data('options') && typeof (this.data('options')[field]) !== 'undefined') ? this.data('options')[field] : app.config.defaultNoteOptions[field];
        } else {
            return $.extend(true, {}, app.config.defaultNoteOptions, this.data('options'));
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
    },
    updatePosition: function (context, order) {
        this.update(context, { order: { $set: order } });

        this.collection.sort();

        this.save(context);
    },


    setStatus: function (context, status) {
        this.update({ status: { $set: status } });
        this.save(context);
    },

    remove: function (context) {
        this.update({ status: { $set: 'trash' } });
        if (this.collection) {
            this.collection.remove(this);
        }
        this.save(context);
    },
    addItem: function (context, type) {
        if (app.model.note.item[type]) {
            this.update(context, { items: { $push: [app.model.note.item[type]()] } });
        }
    },
    removeItem: function (context, uid, silent) {

        var items = this.data(context).items;
        var item = _.find(items, function (item) { return item.uid === uid; });

        if (item.data.trackerId) {
            var trackerId = item.data.trackerId;
            _.each(_.filter(items, function (subItem) { return subItem.group === item.uid; }), function (subItem) {
                items.splice(items.indexOf(subItem), 1);
            });
        }

        items.splice(items.indexOf(item), 1);

        this.update(context, { items: { $set: items } }, silent);

        if (item.data.trackerId) {
            this.deleteTag(trackerId, context);
        }
    },
    updateColor: function (color) {
        this.update({ color: { $set: color } });
    }
},
{
    parse: function (response) {
        response._data.tags = response._data.tags || [];
        return response;
    },
    item: {
        choice: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'choice',
                name: null,
                data: {
                    items: [
                        {
                            text: '',
                            value: '',
                            tags: []
                        }
                    ],
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        list: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'list',
                name: null,
                data: {
                    items: [
                        {
                            text: '',
                            uid: app.lib.uid()
                        }
                    ],
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        text: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'text',
                name: null,
                data: {
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        link: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'link',
                name: null,
                data: {
                    link: '',
                    title: '',
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        numeric: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'numeric',
                name: null,
                data: {
                    value: '',
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        stopwatch: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'stopwatch',
                name: null,
                data: {
                    ellapsed: 0,
                    periods: []
                }
            };

            return $.extend(true, item, data);
        },
        countdown: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'countdown',
                name: null,
                data: {
                    start: 1000 * 60 * 15,
                    ellapsed: 0,
                    periods: []
                }
            };

            return $.extend(true, item, data);
        },
        group: function (trackerId) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'group',
                name: null,
                data: {
                    trackerId: trackerId
                }
            };

            return item;
        }
    },
    defaults: {
        note: function () {
            return {
                _data: {
                    status: 'all',
                    color: 'white',
                    created: Date.now(),
                    modified: Date.now(),
                    note: {
                        order: 0,
                        items: [
                            app.model.note.item.text()
                        ]
                    },
                    tags: []
                }
            };
        },
        tracker: function () {
            return {
                _data: {
                    status: 'all',
                    color: app.lib.randomColor(),
                    created: Date.now(),
                    modified: Date.now(),
                    tag: {
                        order: 0,
                        name: ''
                    },
                    tracker: {
                        order: 0,
                        items: [
                            app.model.note.item.text({ name: '', data: { text: '' } })
                        ]
                    },
                    tags: []
                }
            };
        },
        tag: function () {
            return {
                _data: {
                    status: 'all',
                    color: app.lib.randomColor(),
                    created: Date.now(),
                    modified: Date.now(),
                    tag: {
                        order: 0,
                        name: ''
                    },
                    tags: []
                }
            };
        },
        note_blank: function () {
            return {
                _data: {
                    color: 'white',
                    created: Date.now(),
                    modified: Date.now(),
                    tag: null,
                    note: {
                        order: 0,
                        items: []
                    },
                    tags: []
                }
            };
        },
        get: function (context, tags, data, model) {
            return function () {
                var json = $.extend(true, app.model.note.defaults[context](), app.model.note.defaults.getDefaultData(context, tags), data);
                if (model) {
                    model.originalJson = json;
                }
                return $.extend(true, {}, json);
            };
        },
        getDefaultData: function (context, tags) {
            var result = null;

            if (context === 'note') {
                var data = {};

                _.each(tags, function (tag) {
                    data = app.model.note.addTagToData(data, tag._id);
                });

                // TODO : recursive multiple passes insted of fixed pass count
                if (data.note) {
                    for (var i = 0; i < 3; i++) {
                        _.each(data.note.items, function (noteItem) {
                            if (noteItem.type === 'choice') {
                                _.each(noteItem.data.items, function (listItem) {
                                    if (listItem.checked && listItem.tags && listItem.tags.length > 0) {
                                        _.each(listItem.tags, function (listItemTag) {
                                            data = app.model.note.addTagToData(data, listItemTag);
                                        });
                                    }
                                });
                            }
                        });
                    }
                }

                data = app.model.note.updateChoiceData(data);

                result = {
                    _data: data
                }
            } else {
                result = {
                    _data: {
                        tags: _.map(tags, function (tag) {
                            return { _id: tag._id }
                        })
                    }
                }
            }

            return result;
        }
    },
    addTagToData: function (data, tagId) {
        var data = app.model.note.addTagToDataLogic(data, tagId);
        return data;
    },
    addTagToDataLogic: function (data, tagId) {
        data = $.extend(true, {}, data || {});
        data.tags = data.tags || [];

        var tag = app.data.tags.get(tagId);

        if (tag && !_.find(data.tags, function (tagItem) { return tagItem._id === tagId; })) {
            data.tags = data.tags || [];
            data.tags.push({ _id: tagId });

            if (tag.hasTracker()) {
                data.note = data.note || {};
                data.note.items = data.note.items || [];
                data.note.items = data.note.items.concat(tag.getTrackerItems());
            }

            if (tag.getOptions('noteLinkToTag')) {
                if (!data.tag) {
                    data.tag = {
                        name: '',
                        order: 0
                    };
                    data.color = app.lib.randomColor();
                }
            }

            if (tag.getOptions('noteInheritColor')) {
                data.color = tag.data('color');
            }

            if (tag.getOptions('noteAddToInbox')) {
                data.status = 'inbox';
            }

            if (tag.getOptions('noteTimestamp')) {
                data.options = data.options || {};
                data.options.timestamp = true;
            }

            _.each(tag.getOptions('extratags'), function (tag) {
                data = app.model.note.addTagToDataLogic(data, tag);
            });
        }

        return data;
    },
    updateChoiceData: function (data) {
        if (data && data.note) {
            var allTags = _.pluck(data.tags, '_id');

            _.each(data.note.items, function (item) {
                if (item.type === 'choice') {
                    _.each(item.data.items, function (listItem) {
                        if (listItem.tags && listItem.tags.length > 0) {
                            listItem.checked = _.difference(listItem.tags, allTags).length === 0;
                        }
                    });
                }
            }, this);
        }

        return data;
    }
});