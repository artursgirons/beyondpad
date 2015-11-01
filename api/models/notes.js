var db = require('../../setup/database');

var noteSchema = new db.Schema({
    _deleted: Boolean,
    _owner: db.Schema.Types.ObjectId,
    _batch: db.Schema.Types.ObjectId,
    _demo: Boolean,
    _data: {
        color: String,
        status: String,
        created: Number,
        modified: Number,
        options: {type:db.Schema.Types.Mixed, minimize:true},
        tag: {
            order: Number,
            name: String
        },
        note: {
            order: Number,
            items: db.Schema.Types.Mixed
        },
        tracker: {
            order: Number,
            items: db.Schema.Types.Mixed
        },
        tags: db.Schema.Types.Mixed
    }
});

noteSchema.statics.updateOrder = function (data) {
    var timeoffset = 1402727032767;
    var date = Date.now();

    if (data._data.note && !data._data.note.order) {
        data._data.note.order = (date - timeoffset) * 100;
    }

    if (data._data.tracker && !data._data.tracker.order) {
        data._data.tracker.order = (date - timeoffset) * 100;
    }

    if (data._data.tag && !data._data.tag.order) {
        data._data.tag.order = (date - timeoffset) * 100;
    }

    return data;
}

noteSchema.statics.getRemoveUpdate = function (modified) {
    var update = {
        _deleted: true,
        $unset: {
            '_batch': 1,
            '_demo': 1,
            '_data.color': 1,
            '_data.status': 1,
            '_data.options': 1,
            '_data.tag': 1,
            '_data.note': 1,
            '_data.tracker': 1,
            '_data.tags': 1
        }
    }

    if (modified !== false) {
        modified = modified || Date.now();
        update['_data.modified'] = modified;
    }
    
    return update;
}

noteSchema.statics.removeSync = function (query, callback, modified) {
    var Notes = this || db.beyondpad.model('notes');
    Notes.update(query, Notes.getRemoveUpdate(modified), { multi: true }, callback);
}

noteSchema.index({ '_owner': 1, '_id': 1 });
noteSchema.index({ '_owner': 1 });

module.exports = db.beyondpad.model('notes', noteSchema);