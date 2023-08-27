var fs = require("fs");

var modulus = null;

var env = process.env.NODE_ENV || "prod";

module.exports = {
  maxNoteLength: 2048,
  ipaddress: "127.0.0.1",
  port: process.env.PORT || 27802,
  connectionString: process.env.CONNECTIONSTRING,
  pathApp: __dirname + "/app",
  env: env,
  cookieSecret: process.env.COOKIESECRET,
  cryptoKey: process.env.CRYPTOKEY,
  gcmSender: process.env.GCMSENDER,
  auth: {
    google: {
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENTID,
      clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    },
    twitter: {
      clientID: process.env.TWITTER_CLIENTID,
      clientSecret: process.env.TWITTER_CLIENTSECRET,
    },
    microsoft: {
      clientID: process.env.MICROSOFT_CLIENTID,
      clientSecret: process.env.MICROSOFT_CLIENTSECRET,
    },
  },
  email: {
    service: process.env.EMAIL_SERVICE,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },
  root: __dirname,
  htmlPath: {
    app: "/app/app_entry_point." + env + ".html",
    demo: "/app/demo_entry_point." + env + ".html",
    home: "/app/home_entry_point.html",
    login: "/app/signin_entry_point.html",
    reset: "/app/reset_entry_point.html",
  },
  htmlCache: {},
};
