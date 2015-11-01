var config = require('../../config');
var db = require('../../setup/database');

var Account = require('../models/account');
var Boards = require('../models/boards');
var Notes = require('../models/notes');
var lib = require('../../lib');

var JSONStream = require('JSONStream');
var async = require('async');
var _ = require('lodash');

var gcm = require('node-gcm');
var gcmSender = new gcm.Sender(config.gcmSender);

var synchronize = function (Model, masterQuery, projection, req, res, next) {
    var data = req.body;
    
    var dateServerSynced = parseInt(req.headers['date-server-synced']) || 0;
    var dateClient = parseInt(req.headers['date-client']);
    var dateServer = Date.now();
    
    var dateDifference = dateServer - dateClient;
    
    for (var i = 0; i < data.length; i++) {
        data[i] = (new Model(data[i])).toJSON();
        var item = data[i];

        if (item._data.created == item._data.modified) {
            item._data.created = Math.max(item._data.created + dateServerSynced, dateServerSynced);
        }

        item._data.modified = Math.max(item._data.modified + dateServerSynced, dateServerSynced);
    }
    
    var dataUpdate = [];
    
    var fixCollisions = function (callback) {
        var dataIndex = _.indexBy(data, '_id');
        
        var query = Model.find(_.extend({
            _id: {
                $in: _.map(data, function (item) {
                    return item._id;
                })
            }
        }, masterQuery));
        
        query.find(function (err, models) {
            if (err) {
                callback(err);
            } else {
                _.each(models, function (model) {
                    model = model.toJSON();
                    var dataModify = dataIndex[model._id];
                    if (dataModify) {
                        _.pull(data, dataModify);
                        if (dataModify._data.modified > model._data.modified) {
                            dataUpdate.push(dataModify)
                        }
                    }
                });
                callback();
            }
        });
    }
    
    var insertNewItems = function (callback) {
        if (data.length > 0) {
            Model.collection.insert(data, { multi: true }, function (err) {
                callback(err);
            });
        } else {
            callback();
        }
    }
    
    var updatePreviouseItems = function (callback) {
        if (dataUpdate.length > 0) {
            async.each(
                dataUpdate, 
                function (item, updateCallback) {
                    var _id = item._id;

                    delete item._id;
                    
                    if (item._deleted) {
                        Model.removeSync(_.extend({ _id: _id }, masterQuery), updateCallback, item._data.modified);
                    } else {
                        Model.update(_.extend({ _id: _id }, masterQuery), item, { upsert: !projection }, updateCallback);
                    }
                }, 
                function (err) {
                    callback(err);
                }
            );
        } else {
            callback();
        }
    }
    
    var propperDeleteItems = function (callback) {
        var query = _.extend({
            _id: {
                $in: _.map(data, function (item) {
                    return item._id;
                })
            },
            _deleted: true,
            '_data.modified': {
                $gte: dateServerSynced
            }
        }, masterQuery);

        Model.removeSync(query, callback, false);
    }
    
    async.series([fixCollisions, insertNewItems, updatePreviouseItems, propperDeleteItems], function (err) {
        if (err) {
            next(err);
        } else {
            var query = _.extend({
                '_data.modified': {
                    $gte: dateServerSynced
                }
            }, masterQuery);
            
            res.set("date-server-synced", dateServer);
            res.set('Content-Type', 'application/json');

            Model.find(query, projection).stream().pipe(JSONStream.stringify()).pipe(res);
        }
    });
}

var getHandshake = function (user, next) {
    Account.getRefreshToken(user, function (err, refreshToken) {
        if (!err) {
            var expire = Date.now() + (new Date("1970-01-01T00:10:00")).getTime();

            var token = {
                user: user,
                expire: expire
            }

            var handshake = {
                user: user,
                token: lib.crypto.encode(JSON.stringify(token)),
                refreshToken: refreshToken
            };

            next(null, handshake);
        } else {
            next(err);
        }
    });
};

var sync = module.exports = {

    account: function (req, res, next) {
        synchronize(Account, { _id: req.syncToken.user }, '_id _deleted _data', req, res, next);
    },

    boards: function (req, res, next) {
        synchronize(Boards, { _owner: req.syncToken.user }, undefined, req, res, next);
    },

    notes: function (req, res, next) {
        synchronize(Notes, { _owner: req.syncToken.user }, undefined, req, res, next);
    },
    
    handshake: function (req, res, next) {
        getHandshake(req.user, function (err, handshake) {
            if (err) {
                next(err);
            } else {
                res.send(handshake);
            }
        });
    },

    refreshHandshake: function (req, res, next) {
        var user = req.syncToken.user;
        var refreshToken = req.syncToken.refreshToken;

        var query = {
            _id: user
        };

        Account.findOne(query, function (err, account) {
            if (err) {
                next(err);
            } else {
                if (account && account._refresh_token == refreshToken) {
                    req.user = account._id.toString();
                    sync.handshake(req, res, next);
                } else {
                    res.sendStatus(403);
                }
            }
        });
    },

    registerGCMToken: function (req, res, next) {
        var accountIds = req.body.accountIds;
        var token = req.body.token;

        var query = {
            _id: {
                $in: accountIds
            }
        }
        
        var update = {
            $addToSet: {
                _gcm_tokens: token
            }
        }

        Account.update(query, update, { multi: true }, function (err, count) {
            if (!err) { 
                res.end();
            } else {
                next(err);
            }
        })

    },
    
    getGCMTokens: function (user, callback) {
        Account.findOne({ _id: user }, '_gcm_tokens', function (err, account) {
            callback(err, account && account.toJSON()._gcm_tokens);
        });
    },

    notify: function (user, key, callback) { 
        sync.getGCMTokens(user, function (err, tokens) {
            if (!err) {
                if (tokens && tokens.length > 0) { 
                    var message = new gcm.Message({
                        collapseKey: key,
                        delayWhileIdle: false
                    });

                    gcmSender.send(message, tokens, function (err, result) {
                        if (!err) { 
                            //TODO:remove tokend when token has been deleted from GCM server (app was uninstalled)
                            callback && callback()
                        } else {
                            callback && callback(err);
                        }
                    });

                } else {
                    callback && callback();
                }
            } else {
                callback && callback(err);
            }
        })
    }

};