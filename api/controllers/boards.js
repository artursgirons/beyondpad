var config = require('../../config');
var db = require('../../setup/database');
var Boards = require('../models/boards');
var JSONStream = require('JSONStream');
var _ = require('lodash');

module.exports = {
    get: function (req, res, next) {
        var data = req.body;
        var query = Boards.find({ _owner: req.user, _deleted: { $exists: false } });

        query.sort({ 'order': -1 });

        res.set('Content-Type', 'application/json');
        query.stream().pipe(JSONStream.stringify()).pipe(res);
    }
};