var app = require('../app');
var express = require('express');
var config = require('../config');
var lib = require('../lib');
var bodyParser = require('body-parser')
var fs = require("fs");

var Account = require('../api/models/account');

app.use('/', express.static(config.pathApp, { maxAge: 604800000 }));

app.all('/', function (req, res) { lib.sendHTML(res, 'home'); });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('../api/routers/sync');

require('../api/routers/upgrade');

require('./session');

require('../api/routers/auth');

app.all('/login', function (req, res) { res.redirect('/signin'); });

app.all('/demo', function (req, res) {
    req.logout();
    lib.sendHTML(res, 'demo');
});

app.all('/signin', function (req, res) {
    if (req.isAuthenticated() && req.user) {
        res.redirect('/app');
    } else {
        lib.sendHTML(res, 'login');
    }
});

app.all('/start', function (req, res, next) {
    if (req.isAuthenticated() && req.user) {
        res.redirect('/app');
    }
    else {
        res.redirect('/signin');
    }
});

app.use(function (req, res, next) {
    if (req.isAuthenticated() && req.user) {
        next();
    }
    else {
        res.status(403);

        if (/.*json.*/.test(req.get('accept'))) {
            res.send({ error: 'Forbidden' });
        } else {
            lib.sendHTML(res, 'login');
        }
    }
});

app.use('/tools', function (req, res, next) {
    var error = 'unauthorized';
    if (req.isAuthenticated() && req.user) {
        Account.findOne({ _id: req.user }, function (err, account) {
            if (err) {
                next(error);
            } else {
                if (account._profile && account._profile.google && account._profile.google.json && (account._profile.google.json.email === 'arturs.girons@gmail.com' || account._profile.google.json.email === 'beyondpad@beyondpad.com')) {
                    next();
                } else {
                    next(error);
                }
            }
        });
    } else {
        next(error);
    }
}, express.static('tools'));

app.all('/app', function (req, res) { lib.sendHTML(res, 'app'); });

//for source maps
//app.use('/app/js', express.static(config.pathApp + '/js', { maxAge: 604800000 }));

require('../api/routers/notes');
require('../api/routers/note');

require('../api/routers/boards');
require('../api/routers/board');

require('../api/routers/account');

app.use(function (req, res) {
    res.status(404);

    if (/.*json.*/.test(req.get('accept'))) {
        res.send({ error: 'Not found' });
    } else {
        lib.sendHTML(res, 'home');
    }
});