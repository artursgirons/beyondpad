var config = require('../../config');
var db = require('../../setup/database');
var Account = require('../models/account');
var Boards = require('../models/boards');
var Notes = require('../models/notes');
var _ = require('lodash');
var async = require('async');

module.exports = {
    v1: {
        upgradeToSupportSync: function (req, res, next) {
            
            var result = "";
            
            var addTimeStampToAccounts = function (callback) {
                Account.update({ $or: [{ '_data.modified': { $exists: false } }, { '_data.created': { $exists: false } }] }, { $set: { '_data.modified': 0, '_data.created': 0 } }, { multi: true }, function (err, count) {
                    result += (count && count.n || 0) + " accounts time-samps set; ";
                    callback(err);
                });
            }
            
            var addDataToBoards = function (callback) {
                Boards.update({ '_data': { $exists: false } }, { _data : {} }, { multi: true }, function (err, count) {
                    result += (count && count.n || 0) + " boards data set; ";
                    callback(err);
                });
            }
            
            var addTimeStampToBoards = function (callback) {
                Boards.update({ $or: [{ '_data.modified': { $exists: false } }, { '_data.created': { $exists: false } }] }, { $set: { '_data.modified': 0, '_data.created': 0 } }, { multi: true }, function (err, count) {
                    result += (count && count.n || 0) + " boards time-stamps set; ";
                    callback(err);
                });
            }
            
            var addTimeStampToNotes = function (callback) {
                Notes.update({ $or: [{ '_data.modified': { $exists: false } }, { '_data.created': { $exists: false } }] }, { $set: { '_data.modified': 0, '_data.created': 0 } }, { multi: true }, function (err, count) {
                    result += (count && count.n || 0) + " notes time-stamps set; ";
                    callback(err);
                });
            }
            
            async.series([addTimeStampToAccounts, addDataToBoards, addTimeStampToBoards, addTimeStampToNotes], function (err) {
                if (err) {
                    res.send("failure; " + result);
                } else {
                    res.send("success; " + result);
                }
            });
        }
    }
};