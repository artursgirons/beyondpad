var config = require('../../config');
var db = require('../../setup/database');
var Notes = require('../models/notes');
var _ = require('lodash');
var async = require('async');
var sync = require('./sync');

module.exports = {
    create: function (req, res, next) {
        var data = req.body;

        data._owner = req.user;

        data = Notes.updateOrder(data);
        
        var created = Date.now();
        
        data._data.created = created;
        data._data.modified = created;

        var note = new Notes(data);

        note.save(function (err, note) {
            if (err) {
                next(err);
            }
            else {
                res.send(note);
                sync.notify(req.user, 'notes');
            }
        });
    },
    update: function (req, res, next) {
        var data = req.body;

        data = Notes.updateOrder(data);
        
        var modified = Date.now();
        
        data._data.modified = modified;
        
        var options = {};
        options['new'] = true;

        Notes.findOneAndUpdate({ _id: req.params._id, _owner: req.user, _deleted: { $exists: false } }, { _data: data._data }, options, function (err, note) {
            if (err) {
                next(err);
            }
            else {
                res.send(note);
                sync.notify(req.user, 'notes');
            }
        });
    }
};