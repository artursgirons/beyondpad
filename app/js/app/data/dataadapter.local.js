app.dataadapter.local = {
    data: {
        array: null,
        hash: {}
    },

    load: function (url, req) {
        app.lib.cursorLoading();
        return this.request(url, req).done(this.onSuccess).fail(this.onError);
    },

    getAllTexts: function () {
        var arr = [];
        _.each(this.data.array, function (data) {
            if (data._data.note) {
                _.each(data._data.note.items, function (item) {
                    if (item.data && item.data.text) {
                        arr.push(item.data.text);
                    }
                });
            }
        });

        return arr.join();
    },

    update: function (array) {
        if (!this.data.array) {
            this.data.array = array;
            this.data.hash = {};
            _.each(this.data.array, function (item) {
                this.data.hash[item._id] = item;
            }, this);
        } else {
            _.each(array, function (item) {
                if (this.data.hash[item._id]) {
                    this.data.array.splice(this.data.array.indexOf(this.data.hash[item._id]), 1, item);
                } else {
                    this.data.array.push(item);
                }

                this.data.hash[item._id] = item;
            }, this);
        }
    },

    remove: function (ids) {
        ids = _.isArray(ids) ? ids : [ids];
        _.each(ids, function (id) {
            if (this.data.hash[id]) {
                this.data.array.splice(this.data.array.indexOf(this.data.hash[id]), 1);
                this.data.hash[id] = null;
                delete this.data.hash[id];
            }
        }, this);
    },

    request: function (url, req) {
        var deferred = $.Deferred();

        setTimeout(function () {
            deferred.resolve(this.filter(req, this.data.array));
        }.bind(this), 5);

        return deferred;
    },

    onSuccess: function (res) {
        app.lib.cursorDefault();
    },

    onError: function () {
        app.lib.cursorDefault();
    },

    // filter json data to apply with query data (used to load from local and to validate changed data set for context)
    filter: function (data, result) {
        // extract query string if app.navigation is passed as data
        var queryItems = (data.query && data.query.all) ? app.lib.parseQuery(data.query.all()) : data.query;

        // filter data based on request parameters (query)
        var statusPredicate = null;
        if (queryItems) {
            var statusList = [];
            _.each(queryItems, function (queryItem) {
                if (!queryItem.type) {
                    switch (queryItem.query) {
                        case 'all':
                        case 'inbox':
                        case 'archive':
                        case 'trash':
                            statusList.push(queryItem.query);
                            break;
                    }
                }
            }, this);
            if (statusList.length > 0) {
                statusPredicate = this.statusFinderPredicate(statusList);
            }
        }

        // filter data based on request parameters (page, view)
        switch (data.page) {
            case 'none':
                return [];
            case 'all':
                return result;
            case 'notes':
                switch (data.view) {
                    case 'inbox':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'inbox' &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'all':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'search':
                        result = _.filter(result, function (entity) {
                            return (
                                    (statusPredicate ? statusPredicate(entity) : entity._data.status !== 'trash') &&
                                    entity._data.note
                                );
                        });
                        break;
                    case 'trackers':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.note &&
                                _.find(entity._data.note.items, function (item) {
                                    return item.data.trackerId;
                                })
                            );
                        });
                        break;
                    case 'untagged':
                        result = _.filter(result, function (entity) {
                            return (
                                (entity._data.status === 'all' || entity._data.status === 'inbox') &&
                                (!entity._data.tags || entity._data.tags.length === 0) &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'archive':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'archive' &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'trash':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'trash' &&
                                entity._data.note
                            );
                        });
                        break;
                    default:
                        return [];
                }

                result = _.sortBy(result, function (entity) { return -entity._data.note.order; });
                break;
            case 'trackers':
                switch (data.view) {
                    case 'manage':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.tracker
                            );
                        });
                        break;
                    case 'all':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.note &&
                                _.find(entity._data.note.items, function (item) {
                                    return item.data.trackerId;
                                })
                            );
                        });
                        break;
                    case 'search':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : entity._data.status != 'trash') &&
                                entity._data.note &&
                                _.find(entity._data.note.items, function (item) {
                                    return item.data.trackerId;
                                })
                            );
                        });
                        break;
                    case 'untagged':
                        result = _.filter(result, function (entity) {
                            return (
                                (entity._data.status === 'all' || entity._data.status === 'inbox') &&
                                (!entity._data.tags || entity._data.tags.length === 0) &&
                                entity._data.tracker
                            );
                        });
                        break;
                    case 'archive':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'archive' &&
                                entity._data.tracker
                            );
                        });
                        break;
                    case 'trash':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'trash' &&
                                entity._data.tracker
                            );
                        });
                        break;
                    default:
                        return [];
                }

                switch (data.view) {
                    case 'all':
                    case 'search':
                        result = _.sortBy(result, function (entity) { return -entity._data.note.order; });
                        break;
                    case 'manage':
                    case 'untagged':
                    case 'archive':
                    case 'trash':
                        result = _.sortBy(result, function (entity) { return -entity._data.tracker.order; });
                        break;
                }
                break;
            case 'tags':
                switch (data.view) {
                    case 'preload':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.tag
                            );
                        });
                        break;
                    case 'all':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'search':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : entity._data.status !== 'trash') &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'untagged':
                        result = _.filter(result, function (entity) {
                            return (
                                (entity._data.status === 'all' || entity._data.status === 'inbox') &&
                                (!entity._data.tags || entity._data.tags.length === 0) &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'archive':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'archive' &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'trash':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'trash' &&
                                entity._data.tag
                            );
                        });
                        break;
                    default:
                        return [];
                }

                result = _.sortBy(result, function (entity) { return -entity._data.tag.order; });
                break;
            default:
                return [];
        }

        // filter data based on request parameters (query)
        if (queryItems) {
            _.each(queryItems, function (queryItem) {
                switch (queryItem.type) {
                    case 'branch':
                        var predicate = this.tagFinderPredicate(queryItem.query);

                        result = _.filter(result, function (entity) {
                            return _.find(entity._data.tags, predicate);
                        });

                        predicate = null;
                        break;
                    case 'root':
                        var predicate = this.tagFinderPredicate([queryItem.query]);

                        result = _.filter(result, function (entity) {
                            return _.find(entity._data.tags, predicate);
                        });

                        predicate = null;
                        break;
                    case 'not':
                        var predicate = this.tagFinderPredicate([queryItem.query]);

                        result = _.filter(result, function (entity) {
                            return !_.find(entity._data.tags, predicate);
                        });

                        predicate = null;
                        break;
                    case 'text':
                        var search = this.fuzzyRegExpString(queryItem.query);
                        var predicate = function (item) {
                            return search.test(item.data.text);
                        }

                        result = _.filter(result, function (entity) {
                            return entity._data.note && _.find(entity._data.note.items, predicate);
                        });

                        predicate = null;
                        break;
                    case 'type':
                        var predicate = function (item) {
                            return item.type === queryItem.query;
                        }

                        result = _.filter(result, function (entity) {
                            return entity._data.note && _.find(entity._data.note.items, predicate);
                        });

                        predicate = null;
                        break;
                    case 'id':
                        result = _.filter(result, function (entity) {
                            return entity._id === queryItem.query;
                        });
                        break;
                    case 'color':
                        result = _.filter(result, function (entity) {
                            return entity._data.color === queryItem.query;
                        });
                        break;
                    case 'name':
                        var search = this.fuzzyRegExpString(queryItem.query);

                        result = _.filter(result, function (entity) {
                            return entity._data.tag && search.test(entity._data.tag.name);
                        });
                        break;
                }
            }, this);
        }

        return JSON.parse(JSON.stringify(result));
    },

    updateActionExecute: function (url, req) {
        switch(url){
            case '/api/notes/update/tags':
                return app.dataadapter.local.updateActions.tags(req);
                break;
            case '/api/notes/update/status':
                return app.dataadapter.local.updateActions.status(req);
                break;
            case '/api/notes/update/color':
                return app.dataadapter.local.updateActions.color(req);
                break;
            case '/api/notes/upload/list':
                return app.dataadapter.local.updateActions.list(req);
                break;
        }
    },

    updateActions: {
        tags: function (data) {
            var data = $.extend(true, {}, data);
            var modified = Date.now();

            var filtered = _.filter(app.dataadapter.local.data.array, function (note) {
                return _.contains(data.ids, note._id);
            });

            //pull
            _.each(filtered, function (note) {
                _.each(data.tags.pull, function (tagId) {
                    var tag = _.find(note._data.tags, function (tag) {
                        return tag._id === tagId;
                    });

                    var index = note._data.tags.indexOf(tag);

                    if (index >= 0) {
                        note._data.tags.splice(index, 1);
                        note._data.modified = modified;
                    }
                })
            });

            //push
            _.each(filtered, function (note) {
                note._data.tags = note._data.tags || [];
                _.each(data.tags.push, function (tagId) {
                    note._data.tags.push({ _id: tagId });
                    note._data.modified = modified;
                })
            });

            //fix
            _.each(filtered, function (note) {
                note._data.tags = _.uniq(note._data.tags, function (tag) { return tag._id; });

                if (note._data.tags && note._data.tags.length === 0) {
                    delete note._data.tags
                }
            });

            return filtered;
        },
        status: function (data) {
            var data = $.extend(true, {}, data);
            var modified = Date.now();

            var filtered = _.filter(app.dataadapter.local.data.array, function (note) {
                return _.contains(data.ids, note._id);
            });

            _.each(filtered, function (note) {
                note._data.status = data.status;
                note._data.modified = modified;
            });

            return filtered;
        },
        color: function (data) {
            var data = $.extend(true, {}, data);
            var modified = Date.now();

            var filtered = _.filter(app.dataadapter.local.data.array, function (note) {
                return _.contains(data.ids, note._id);
            });

            _.each(filtered, function (note) {
                note._data.color = data.color;
                note._data.modified = modified;
            });

            return filtered;
        },
        list: function (data) {
            var data = $.extend(true, {}, data);

            var created = Date.now();
            var timeoffset = 1402727032767;
            var order = (created - timeoffset) * 100;

            var notes = [];
            var tags = _.map(data.tags, function (tag) {
                return { _id: tag }
            });

            var texts = data.text.split('\n');
            order = order + (texts.length * 100 || 0);
            var batch = app.lib.oid();

            _.each(texts, function (text, index) {
                if (text && text.length > 0 && notes.length < 201) {

                    text = text.trim();
                    var textOriginal = text;
                    text = text.length < app.config.maxNoteLength + 1 ? text : text.substring(0, app.config.maxNoteLength - 3);

                    if (text.length !== textOriginal.length) {
                        text += '...';
                    }

                    var note = {
                        _id: app.lib.oid(),
                        _owner: app.data.account.get('_id'),
                        _batch: batch,
                        _data: {
                            created: created,
                            modified: created,
                            color: 'white',
                            status: 'all',
                            note: {
                                order: Math.round(order - index * 100),
                                items: [{
                                    data: {
                                        text: text
                                    },
                                    name: null,
                                    type: 'text',
                                    group: null,
                                    uid: '0'
                                }]
                            }
                        }
                    };

                    if (tags.length > 0) {
                        note._data.tags = tags;
                    }

                    notes.push(note);
                }
            });

            return notes;
        }
    },

    // build function that will return predicate for iterating through tags
    tagFinderPredicate: function (or) {
        var ors = _.map(or, function (tag) {
            return 'tag._id==="' + tag + '"';
        });

        return new Function('tag', 'return ' + ors.join(' || '));
    },

    statusFinderPredicate: function (statusList) {
        var ors = _.map(statusList, function (status) {
            return 'entity._data.status==="' + status + '"';
        });

        return new Function('entity', 'return ' + ors.join(' || '));
    },

    // regexp for searching strings that lossely match the query
    fuzzyRegExpString: function (text) {
        return new RegExp(text.split('').join('.{0,2}').replace(/\s/igm, '.*'), 'im');
    }
};