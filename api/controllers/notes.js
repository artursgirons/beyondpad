var config = require('../../config');
var db = require('../../setup/database');
var Notes = require('../models/notes');
var JSONStream = require('JSONStream');
var _ = require('lodash');
var async = require('async');
var sync = require('./sync');

var fuzzyRegExpString = function (text) {
    return text.split('').join('.{0,2}').replace(/\s/igm, '.*');
}

module.exports = {
    post: function (req, res, next) {
        var data = req.body;
        var query = [];
        var sort;

        //Initialy filter data by user account ID
        query.push({ _owner: req.user, _deleted: { $exists: false } });

        //Create statusQuery that will enforce specific status
        var statusQuery = null;
        if (data.query) {
            var statusList = [];
            _.each(data.query, function (queryItem) {
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
            });
            if (statusList.length > 0) {
                statusQuery = { $or: _.map(statusList, function (status) { return { '_data.status': status } }) }
            }
        }

        //Generic filters for Page and View
        switch (data.page) {
            case 'all': {
                break;
            }
            case 'notes':
                switch (data.view) {
                    case 'inbox':
                        query.push({ '_data.status': 'inbox' });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'all':
                        query.push(statusQuery || { $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'search':
                        query.push(statusQuery || { '_data.status': { $ne: 'trash' } });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'trackers':
                        query.push({ '_data.note.items': { $elemMatch: { 'data.trackerId': { $exists: true } } } });
                        query.push(statusQuery || { $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'untagged':
                        query.push(statusQuery || { $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.tags': { $exists: false } });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'archive':
                        query.push({ '_data.status': 'archive' });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'trash':
                        query.push({ '_data.status': 'trash' });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    default:
                        res.send([]);
                        return;
                }
                sort = { '_data.note.order': -1 };
                break;
            case 'trackers':
                switch (data.view) {
                    case 'manage':
                        query.push(statusQuery || { $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.tracker': { $exists: true } });
                        break;
                    case 'all':
                        query.push({ '_data.note.items': { $elemMatch: { 'data.trackerId': { $exists: true } } } });
                        query.push(statusQuery || { $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'search':
                        query.push({ '_data.note.items': { $elemMatch: { 'data.trackerId': { $exists: true } } } });
                        query.push(statusQuery || { '_data.status': { $ne: 'trash' } });
                        query.push({ '_data.note': { $exists: true } });
                        break;
                    case 'untagged':
                        query.push({ $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.tags': { $exists: false } });
                        query.push({ '_data.tracker': { $exists: true } });
                        break;
                    case 'archive':
                        query.push({ '_data.status': 'archive' });
                        query.push({ '_data.tracker': { $exists: true } });
                        break;
                    case 'trash':
                        query.push({ '_data.status': 'trash' });
                        query.push({ '_data.tracker': { $exists: true } });
                        break;
                    default:
                        res.send([]);
                        return;
                }
                sort = { '_data.tracker.order': -1 };
                break;
            case 'tags':
                switch (data.view) {
                    case 'preload':
                        query.push({ '_data.tag': { $exists: true } });
                        break;
                    case 'all':
                        query.push(statusQuery || { $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.tag': { $exists: true } });
                        break;
                    case 'search':
                        query.push(statusQuery || { '_data.status': { $ne: 'trash' } });
                        query.push({ '_data.tag': { $exists: true } });
                        break;
                    case 'untagged':
                        query.push({ $or: [{ '_data.status': 'all' }, { '_data.status': 'inbox' }] });
                        query.push({ '_data.tags': { $exists: false } });
                        query.push({ '_data.tag': { $exists: true } });
                        break;
                    case 'archive':
                        query.push({ '_data.status': 'archive' });
                        query.push({ '_data.tag': { $exists: true } });
                        break;
                    case 'trash':
                        query.push({ '_data.status': 'trash' });
                        query.push({ '_data.tag': { $exists: true } });
                        break;
                    default:
                        res.send([]);
                        return;
                }
                sort = { '_data.tag.order': -1 };
                break;
            default:
                res.send([]);
                return;
        }

        //Build query for tags based on query property
        if (data.query) {
            _.each(data.query, function (queryItem) {
                switch (queryItem.type) {
                    case 'branch':
                        query.push({
                            '_data.tags': {
                                $elemMatch: {
                                    $or: _.map(queryItem.query, function (tag) {
                                        return { '_id': tag }
                                    })
                                }
                            }
                        });
                        break;
                    case 'root':
                        query.push({
                            '_data.tags': {
                                $elemMatch: {
                                    '_id': queryItem.query
                                }
                            }
                        });
                        break;
                    case 'not':
                        query.push({
                            '_data.tags': {
                                $not: {
                                    $elemMatch: {
                                        '_id': queryItem.query
                                    }
                                }
                            }
                        });
                        break;
                    case 'text':
                        query.push({
                            '_data.note.items.data.text': {
                                $regex: fuzzyRegExpString(queryItem.query),
                                $options: 'im'
                            }
                        });
                        break;
                    case 'type':
                        query.push({
                            '_data.note.items.type': queryItem.query
                        });
                        break;
                    case 'color':
                        query.push({
                            '_data.color': queryItem.query
                        });
                        break;
                    case 'id':
                        query.push({
                            '_id': queryItem.query
                        });
                        break;
                    case 'name':
                        query.push({
                            '_data.tag.name': {
                                $regex: fuzzyRegExpString(queryItem.query),
                                $options: 'im'
                            }
                        });
                        break;
                }
            });
        }

        var command = Notes.find({ $and: query }).sort(sort);

        res.set('Content-Type', 'application/json');
        command.stream().pipe(JSONStream.stringify()).pipe(res);
    },
    update: {
        tags: function (req, res, next) {
            var data = req.body;
            var modified = Date.now();

            var query = {
                _owner: req.user,
                _deleted: { $exists: false },
                _id: { $in: _.map(data.ids, function (id) { return id; }) }
            };

            var pull = function (callback) {
                if (data.tags.pull && data.tags.pull.length > 0) {
                    var updateRemove = {
                        $pull: {
                            '_data.tags': {
                                _id: { $in: data.tags.pull }
                            }
                        },
                        '_data.modified': modified
                    };
                    Notes.update(query, updateRemove, { multi: true }, function (err) { 
                        callback(err);
                    });
                } else {
                    callback();
                }
            }
            
            var push = function (callback) {
                if (data.tags.push && data.tags.push.length > 0) {
                    var updateAdd = {
                        $addToSet: {
                            '_data.tags': {
                                $each: _.map(data.tags.push, function (tag) {
                                    return { _id: tag }
                                })
                            }
                        },
                        '_data.modified': modified
                    };
                    Notes.update(query, updateAdd, { multi: true }, function (err) {
                        callback(err);
                    });
                } else {
                    callback();
                }
            }
            
            var fix = function (callback) {
                if (data.tags.pull && data.tags.pull.length > 0 && (!data.tags.push || data.tags.push.length === 0)) {
                    query['_data.tags'] = { $size: 0 }
                    Notes.update(query, { $unset: { '_data.tags': '' } }, { multi: true }, function (err) {
                        delete query['_data.tags'];
                        callback(err);
                    });
                } else {
                    callback();
                }
            }

            async.series([pull, push, fix], function (err) {
                if (err) {
                    next(err);
                } else {
                    res.set('Content-Type', 'application/json');
                    Notes.find(query).stream().pipe(JSONStream.stringify()).pipe(res);
                    sync.notify(req.user, 'notes');
                }
            });
        },
        status: function (req, res, next) {
            var data = req.body;
            var modified = Date.now();

            var query = {
                _owner: req.user,
                _deleted: { $exists: false },
                _id: { $in: _.map(data.ids, function (id) { return id; }) }
            };
            
            var change = function (callback) {
                var update = {
                    '_data.status': data.status,
                    '_data.modified': modified
                };
                Notes.update(query, update, { multi: true }, function (err) {
                    callback(err);
                });
            }
            
            async.series([change], function (err) {
                if (err) {
                    next(err);
                } else {
                    res.set('Content-Type', 'application/json');
                    Notes.find(query).stream().pipe(JSONStream.stringify()).pipe(res);
                    sync.notify(req.user, 'notes');
                }
            });
        },
        color: function (req, res, next) {
            var data = req.body;
            var modified = Date.now();
            
            var query = {
                _owner: req.user,
                _deleted: { $exists: false },
                _id: { $in: _.map(data.ids, function (id) { return id; }) }
            };
            
            var change = function (callback) {
                var update = {
                    '_data.color': data.color,
                    '_data.modified': modified
                };
                Notes.update(query, update, { multi: true }, function (err) {
                    callback(err);
                });
            }
            
            async.series([change], function (err) {
                if (err) {
                    next(err);
                } else {
                    res.set('Content-Type', 'application/json');
                    Notes.find(query).stream().pipe(JSONStream.stringify()).pipe(res);
                    sync.notify(req.user, 'notes');
                }
            });
        }
    },
    upload: {
        list: function (req, res, next) {
            var data = req.body;
            
            var created = Date.now();
            var timeoffset = 1402727032767;
            var order = (created - timeoffset) * 100;

            var notes = [];
            var tags = _.map(data.tags, function (tag) {
                return { _id: tag }
            });

            var texts = data.text.split('\n');
            order = order + (texts.length * 100 || 0);
            var batch = new db.Types.ObjectId();

            var query = {
                _owner: req.user,
                _batch: batch
            };

            _.each(texts, function (text, index) {
                if (text && text.length > 0 && notes.length < 201) {

                    text = text.trim();
                    var textOriginal = text;
                    text = text.length < config.maxNoteLength + 1 ? text : text.substring(0, config.maxNoteLength - 3);

                    if (text.length !== textOriginal.length) {
                        text += '...';
                    }

                    var note = {
                        _owner: db.Types.ObjectId(req.user),
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
            
            var insert = function (callback) {
                if (notes.length > 0) {
                    Notes.collection.insert(notes, { multi: true }, function (err) {
                        callback(err);
                    });
                } else { 
                    callback();
                }
            }
            
            async.series([insert], function (err) {
                if (err) {
                    next(err);
                } else {
                    res.set('Content-Type', 'application/json');
                    Notes.find(query).stream().pipe(JSONStream.stringify()).pipe(res);
                    sync.notify(req.user, 'notes');
                }
            });
        }
    },
    remove: function (req, res, next) {
        var data = req.body;

        var query = {
            _owner: req.user,
            _id: { $in: _.map(data.ids, function (id) { return id; }) }
        };

        var change = function (callback) {
            Notes.removeSync(query, function (err) {
                callback(err);
                if (!err) { 

                }
            });
        }

        async.series([change], function (err) {
            if (err) {
                next(err);
            } else {
                res.send([]);
                sync.notify(req.user, 'notes');
            }
        });
    }
};