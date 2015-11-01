var fs = require("fs");

var modulus = null;

var env = process.env.NODE_ENV || 'prod';

module.exports = {
    maxNoteLength: 2048,
    ipaddress: '127.0.0.1',
    port: process.env.PORT || process.env.port || 8080,
    connectionString: process.env.DB || modulus || 'mongodb://localhost/beyondpad',
    pathApp: __dirname + '/app',
    env: env,
    cookieSecret: '00000000000000000',
    cryptoKey:'00000000000000000000000000000000',
    gcmSender:'000000000000000000000000000000000000000',
    auth: {
        google: {
            clientID: '000000000000000000000000000000000000000000000000000000000000000000000000',
            clientSecret: '000000000000000000000000'
        },
        facebook: {
            clientID: '000000000000000',
            clientSecret: '00000000000000000000000000000000'
        },
        twitter: {
            clientID: '0000000000000000000000000',
            clientSecret: '00000000000000000000000000000000000000000000000000'
        },
        microsoft: {
            clientID: '0000000000000000',
            clientSecret: '00000000000000000000000000000000'
        }
    },
    email: {
        service:'Gmail',
        username: 'beyondpad@beyondpad.com',
        password: '00000000000000000000'
    },
    root: __dirname,
    htmlPath: {
        app: '/app/app_entry_point.' + env + '.html',
        demo: '/app/demo_entry_point.' + env + '.html',
        home: '/app/home_entry_point.html',
        login: '/app/signin_entry_point.html',
        reset: '/app/reset_entry_point.html'
    },
    htmlCache: {}
};