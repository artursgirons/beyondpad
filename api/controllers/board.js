var config = require('../../config');
var db = require('../../setup/database');
var Boards = require('../models/boards');
var _ = require('lodash');
var sync = require('./sync');

module.exports = {
    create: function (req, res, next) {
        var data = req.body;
        
        var created = Date.now();
        
        data._id = db.Types.ObjectId();
        data._owner = req.user;
        
        data.order = (created - 1398778819956) * 100;
        
        if (!data._data) {
            data._data = {};
        }
        
        data._data.created = created;
        data._data.modified = created;

        (new Boards(data)).save(function (err, board) {
            if (err) {
                next(err);
            }
            else {
                res.send(board);
                sync.notify(req.user, 'boards');
            }
        });
    },
    update: function (req, res, next) {
        var data = req.body;

        delete data._id;
        delete data._v;
        delete data._owner;
        
        var modified = Date.now();
        
        if (!data._data) {
            data._data = {};
        }
        
        data._data.modified = modified;
        
        var options = {};
        options['new'] = true;

        Boards.findOneAndUpdate({ _id: req.params.id, _owner: req.user, _deleted: { $exists: false } }, data, options, function (err, board) {
            if (err) {
                next(err);
            }
            else {
                res.send(board);
                sync.notify(req.user, 'boards');
            }
        });
    },
    get: function (req, res, next) {
        Boards.findOne({ _id: req.params.id, _owner: req.user, _deleted: { $exists: false }  }, function (err, board) {
            if (err) {
                next(err);
            }
            else {
                res.send(board);
            }
        });
    },
    remove: function (req, res, next) {
        Boards.removeSync({ _id: req.params.id, _owner: req.user }, function (err) {
            if (err) {
                next(err);
            }
            else {
                res.end();
                sync.notify(req.user, 'boards');
            }
        });
    }
};