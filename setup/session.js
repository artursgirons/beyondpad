var app = require('../app');
var config = require('../config');
var session = require("client-sessions");

app.use(session({
    requestKey: 'session',
    cookieName: 'account',
    secret: config.cookieSecret,
    duration: 2 * 24 * 60 * 60 * 1000,
    activeDuration: 2 * 24 * 60 * 60 * 1000
}));