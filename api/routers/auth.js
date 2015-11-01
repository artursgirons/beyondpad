var config = require('../../config');
var app = require('../../app');
var login = require('../controllers/auth');
var passport = require('passport');
var Account = require('../models/account');
var bcrypt = require('bcrypt');
var lib = require('../../lib');
var sync = require('../controllers/sync');

passport.serializeUser(function (accountId, done) {
    done(null, accountId);
});

passport.deserializeUser(function (accountId, done) {
    done(null, accountId);
});

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GoogleTokenStrategy = require('passport-google-token').Strategy;

var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookTokenStrategy = require('passport-facebook-token').Strategy;

var TwitterStrategy = require('passport-twitter').Strategy;
var TwitterTokenStrategy = require('passport-twitter-token').Strategy;

var WindowsLiveStrategy = require('passport-windowslive').Strategy
var WindowsLiveTokenStrategy = require('passport-windows-live-token').Strategy;

var LocalStrategy = require('passport-local').Strategy;


passport.use(new WindowsLiveStrategy({
    clientID: config.auth.microsoft.clientID,
    clientSecret: config.auth.microsoft.clientSecret,
    callbackURL: '/auth/microsoft/callback'
},
  function (accessToken, refreshToken, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new WindowsLiveTokenStrategy({
    clientID: config.auth.microsoft.clientID,
    clientSecret: config.auth.microsoft.clientSecret,
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, next) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new GoogleStrategy({
    clientID: config.auth.google.clientID,
    clientSecret: config.auth.google.clientSecret,
    callbackURL: '/auth/google/callback'
},
  function (accessToken, refreshToken, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new GoogleTokenStrategy({
    clientID: config.auth.google.clientID,
    clientSecret: config.auth.google.clientSecret
},
  function (accessToken, refreshToken, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new FacebookStrategy({
    clientID: config.auth.facebook.clientID,
    clientSecret: config.auth.facebook.clientSecret,
    callbackURL: "/auth/facebook/callback",
    enableProof: false
},
  function (accessToken, refreshToken, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new FacebookTokenStrategy({
    clientID: config.auth.facebook.clientID,
    clientSecret: config.auth.facebook.clientSecret
},
  function (accessToken, refreshToken, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new TwitterStrategy({
    consumerKey: config.auth.twitter.clientID,
    consumerSecret: config.auth.twitter.clientSecret,
    callbackURL: "/auth/twitter/callback"
},
  function (token, tokenSecret, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new TwitterTokenStrategy({
    consumerKey: config.auth.twitter.clientID,
    consumerSecret: config.auth.twitter.clientSecret
},
  function (token, tokenSecret, profile, done) {
    Account.getAccountId(profile, function (err, accountId) {
        done(err, accountId);
    });
}
));

passport.use(new LocalStrategy(
    function (email, password, done) {
        Account.getAccountIdByUsernameAndPassword(email, password, function (err, accountId) {
            done(err, accountId);
        });
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.get(
    '/auth/microsoft/token', 
    function (req, res, next) {
        req.query.access_token = req.headers['auth-provider-token'];
        next();
    }, 
    passport.authenticate('windows-live-token'),
    sync.handshake
);

app.get(
    '/auth/google/token', 
    function (req, res, next) {
        req.query.access_token = req.headers['auth-provider-token'];
        next();
    }, 
    passport.authenticate('google-token'),
    sync.handshake
);

app.get(
    '/auth/facebook/token',
    function (req, res, next) {
        req.query.access_token = req.headers['auth-provider-token'];
        next();
    }, 
    passport.authenticate('facebook-token'),
    sync.handshake
);

app.get(
    '/auth/twitter/token',
    function (req, res, next) {
        req.query.oauth_token = req.headers['auth-provider-token'];
        req.query.oauth_token_secret = req.headers['auth-provider-token-secret'];
        req.query.user_id = req.headers['auth-provider-user-id'];
        next();
    }, 
    passport.authenticate('twitter-token'),
    sync.handshake
);

app.get('/auth/microsoft', passport.authenticate('windowslive', { scope: ['wl.signin', 'wl.emails'] }));
app.get('/auth/microsoft/callback',
    passport.authenticate('windowslive', {
    failureRedirect: '/signin',
    successRedirect: '/app'
})
);

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'] }));
app.get('/auth/google/callback',
    passport.authenticate('google', {
    failureRedirect: '/signin',
    successRedirect: '/app'
})
);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
    failureRedirect: '/signin',
    successRedirect: '/app'
})
);

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
    failureRedirect: '/signin',
    successRedirect: '/app'
})
);

app.post('/auth/local/signin',
    passport.authenticate('local'),
    function (req, res) {
    res.send(req.isAuthenticated());
}
);

app.post('/auth/local/signup', function (req, res, next) {
    Account.findOne({ '_profile.local.id': req.body.username }, function (err, account) {
        if (!account) {
            bcrypt.hash(req.body.password, 8, function (err, hash) {
                if (err) {
                    next(err);
                } else {
                    var profile = {
                        provider: 'local',
                        emails: [{ value: req.body.username }],
                        id: req.body.username,
                        _json: {
                            hash: hash
                        }
                    };
                    
                    Account.getAccountId(profile, function (err, account) {
                        if (err) {
                            next(err);
                        } else {
                            passport.authenticate('local', function (err, user) {
                                if (err) { next(err); }
                                if (!user) { res.send(false); }
                                req.login(user, function (err) {
                                    if (err) { return next(err); }
                                    return res.send(true);
                                });
                            })(req, res, next);
                        }
                    });
                }
            });
        } else {
            return res.send(false);
        }
    });
});

app.post('/auth/local/reset', function (req, res, next) {
    Account.findOne({ '_profile.local.id': req.body.username }, function (err, account) {
        if (err) {
            return res.send(false);
        } else {
            if (account) {
                var resetId = lib.guid();
                Account.update({ _id: account._id }, { '_profile.local.json.resetId': resetId }, null, function (err) {
                    if (err) {
                        return next(err);
                    } else {
                        sendPasswordResetEmail(req.body.username, resetId, function (err) {
                            if (err) {
                                return next(err);
                            } else {
                                return res.send(true);
                            }
                        });
                    }
                });
            } else {
                return next({ message: 'Account does not exist' });
            }
        }
    });
});

var db = require('../../setup/database.js');

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/start');
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: config.email.service,
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
});

var sendPasswordResetEmail = function (email, resetId, callback) {
    var url = 'http://www.beyondpad.com/reset/' + resetId;
    var mailOptions = {
        from: 'Beyondpad <info@beyondpad.com>',
        to: email,
        subject: 'Password reset',
        text: 'Folow the link to reset Beyondpad password ' + url,
        html: '<span>Folow the link to reset Beyondpad password <a href="' + url + '">' + url + '</a></span>'
    };
    
    transporter.sendMail(mailOptions, callback);
};

app.get('/reset/:resetId', function (req, res) {
    Account.findOne({ '_profile.local.json.resetId': req.params.resetId }, function (err, account) {
        if (err || !account) {
            res.redirect('/');
        } else {
            lib.sendHTML(res, 'reset');
        }
    })
});

app.post('/reset/:resetId', function (req, res, next) {
    Account.findOne({ '_profile.local.json.resetId': req.params.resetId }, function (err, account) {
        if (err) {
            return next(err);
        } else {
            if (account) {
                bcrypt.hash(req.body.password, 8, function (err, hash) {
                    if (err) {
                        return next(err);
                    } else {
                        var update = {
                            '_profile.local.json.resetId': null,
                            '_profile.local.json.hash': hash,
                        }
                        
                        Account.update({ _id: account._id }, update, null, function (err) {
                            if (err) {
                                return next(err);
                            } else {
                                req.body.username = account._profile.local.id;
                                passport.authenticate('local', function (err, user) {
                                    if (err) { res.send(false);; }
                                    if (!user) { res.send(false); }
                                    req.login(user, function (err) {
                                        if (err) { return res.send(false); }
                                        return res.send(true);
                                    });
                                })(req, res);
                            }
                        });
                    }
                });
            } else {
                return next({ message: 'wrong reset id' });
            }
        }
    });
});

app.get('/impersonate/:id', function (req, res, next) {
    if (req.isAuthenticated() && req.user) {
        Account.findOne({ _id: req.user }, function (err, account) {
            if (err) {
                next();
            } else {
                if (account._profile && account._profile.google && account._profile.google.json && (account._profile.google.json.email === 'arturs.girons@gmail.com' || account._profile.google.json.email === 'beyondpad@beyondpad.com')) {
                    req.login(req.params.id, function (err) {
                        if (err) {
                            next();
                        } else {
                            res.redirect('/app');
                        }
                    });
                } else {
                    next();
                }
            }
        });
    } else {
        next();
    }
});