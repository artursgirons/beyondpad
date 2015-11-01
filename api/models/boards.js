var db = require('../../setup/database');

var listSchema = new db.Schema({
    _data: {
        name: String,
        color: String,
        tags: [],
        excludeTags: [],
        options: db.Schema.Types.Mixed
    }
});

var boardSchema = new db.Schema({
    _deleted: Boolean,
    _owner: db.Schema.Types.ObjectId,
    _data: {
        created: Number,
        modified: Number
    },
    name: String,
    order: Number,
    color: String,
    lists: [listSchema]
});

boardSchema.statics.getRemoveUpdate = function (modified) {
    var update = {
        _deleted: true,
        $unset: {
            'name': 1,
            'order': 1,
            'color': 1,
            'lists': 1
        }
    }

    if (modified !== false) {
        modified = modified || Date.now();
        update['_data.modified'] = modified;
    }

    return update;
}

boardSchema.statics.removeSync = function (query, callback, modified) {
    var Boards = this || db.beyondpad.model('boards');
    Boards.update(query, Boards.getRemoveUpdate(modified), { multi: true }, callback);
}

boardSchema.index({ '_owner': 1, '_id': 1 });
boardSchema.index({ '_owner': 1 });

module.exports = db.beyondpad.model('boards', boardSchema);