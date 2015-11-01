var Account = require('../models/account');
var sync = require('./sync');

module.exports = {
    get: function (req, res, next) {
        Account.findOne({ _id: req.user, _deleted: { $exists: false } }, '_id _data', function (err, account) {
            if (err) {
                next(err);
            }
            else {
                res.send(account || {});
            }
        });
    },
    update: function (req, res, next) {
        var _data = req.body._data;
        
        _data.modified = Date.now();
        
        if (req.user === req.params.id) {
            Account.update({ _id: req.user, _deleted: { $exists: false } }, { _data: _data }, function (err) {
                if (err) {
                    return res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                    sync.notify(req.user, 'account');
                    return;
                }
            })
        } else {
            return res.sendStatus(500);
        }
    }
};