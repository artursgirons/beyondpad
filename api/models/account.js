var db = require('../../setup/database');
var demodata = require('./demodata');
var lib = require('../../lib');

var accountSchema = new db.Schema();

var bcrypt = require('bcrypt');

accountSchema.add({
    _deleted: Boolean,
    _data: {
        email: String,
        name: String,
        image: String,
        created: Number,
        modified: Number,
        options: db.Schema.Types.Mixed
    },
    _refresh_token: String,
    _gcm_tokens: [],
    _profile: {
        google: {
            id: String,
            json: db.Schema.Types.Mixed,
        },
        facebook: {
            id: String,
            json: db.Schema.Types.Mixed,
        },
        twitter: {
            id: String,
            json: db.Schema.Types.Mixed,
        },
        windowslive: {
            id: String,
            json: db.Schema.Types.Mixed,
        },
        local: {
            id: String,
            json: db.Schema.Types.Mixed,
        }
    }
});

accountSchema.statics.getRefreshToken = function (user, next) {
    var Account = this || db.beyondpad.model('accounts');
    
    var query = {
        _id: user
    };
    
    Account.findOne(query, function (err, account) {
        if (err || account === null) {
            next(err);
        } else {
            if (account._refresh_token) {
                next(err, account._refresh_token);
            } else {
                account._refresh_token = lib.guid();
                
                account.save(function (err, account) {
                    if (err) {
                        next(err);
                    } else {
                        next(null, account._refresh_token);
                    }
                });
            }
        }
    });

};

accountSchema.statics.getAccountId = function (profile, next) {
    var Account = this || db.beyondpad.model('accounts');

    var query = {};

    query['_profile.' + profile.provider + '.id'] = profile.id;
    query['_deleted'] = { $exists: false };

    Account.findOne(query, function (err, account) {
        if (err) {
            next(err);
        } else {
            if (account) {
                next(err, account._id);
            } else {
                var _profile = {};
                var _provider = _profile[profile.provider] = {};
                _provider.id = profile.id;
                _provider.json = profile._json;
                
                var created = Date.now();

                var account = new Account({
                    _data: {
                        email: profile.emails && profile.emails[0] && profile.emails[0].value,
                        name: profile.displayName,
                        created: created,
                        modified: created
                    },
                    _profile: _profile
                });

                account.save(function (err, account) {
                    if (err) {
                        next(err);
                    } else {
                        demodata.create(account._id.toString(), function () {
                            next(err, account._id);
                        })
                    }
                });
            }
        }
    });
};

accountSchema.statics.getAccountIdByUsernameAndPassword = function (email, password, next) {
    var Account = this || db.beyondpad.model('accounts');
    
    Account.findOne({ '_profile.local.id': email, '_deleted': { $exists: false } }, function (err, account) {
        if (err || !account) {
            return next(err, account);
        } else {
            
            bcrypt.compare(password, account._profile.local.json.hash, function (err, res) {
                if (err) {
                    next(err, null);
                } else {
                    if (res) {
                        next(err, account._id);
                    } else {
                        next(err, null);
                    }
                }
            });
        }
    })
};

accountSchema.statics.getRemoveUpdate = function (modified) {
    var update = {
        _deleted: true,
        $unset: {
            '_profile': 1,
            '_data.email': 1,
            '_data.name': 1,
            '_data.image': 1,
            '_data.options': 1
        }
    }
    
    if (modified !== false) {
        modified = modified || Date.now();
        update['_data.modified'] = modified;
    }

    return update;
}

accountSchema.statics.removeSync = function (query, callback, modified) {
    var Account = this || db.beyondpad.model('accounts');
    Account.update(query, Account.getRemoveUpdate(modified), { multi: true }, callback);
}

accountSchema.index({ '_profile.local.id': 1 });
accountSchema.index({ '_profile.google.id': 1 });
accountSchema.index({ '_profile.twitter.id': 1 });
accountSchema.index({ '_profile.facebook.id': 1 });

var accountModel = module.exports = db.beyondpad.model('accounts', accountSchema);