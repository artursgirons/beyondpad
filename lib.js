var config = require('./config');
var fs = require("fs");
var crypto = require('crypto');

var lib = module.exports = {
    sendHTML: function (res, name) {
        if (config.env === 'dev') {
            res.sendFile(config.root + config.htmlPath[name]);
        } else {
            if (!config.htmlCache[name]) {
                config.htmlCache[name] = fs.readFileSync(config.root + config.htmlPath[name], { encoding: 'utf8' });
            }
            res.header('Content-Type', 'text/html').send(config.htmlCache[name]);
        }
    },
    uid: function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    guid: function () {
        var uid = lib.uid;
        return uid() + uid() + uid() + uid() + uid() + uid() + uid() + uid();
    },
    crypto: (function () {
        var ALGORITHM = 'AES-256-CBC';
        var KEY = config.cryptoKey;

        function base64urlencode(arg) {
            var s = arg.toString('base64');
            s = s.split('=')[0];
            s = s.replace(/\+/g, '-');
            s = s.replace(/\//g, '_');
            return s;
        }

        function base64urldecode(arg) {
            var s = arg;
            s = s.replace(/-/g, '+');
            s = s.replace(/_/g, '/');
            switch (s.length % 4) {
                case 0:
                    break;
                case 2:
                    s += "==";
                    break;
                case 3:
                    s += "=";
                    break;
                default:
                    new Buffer('', 'base64');
            }
            return new Buffer(s, 'base64');
        }

        function forceBuffer(binaryOrBuffer) {
            if (Buffer.isBuffer(binaryOrBuffer)) {
                return binaryOrBuffer;
            } else {
                return new Buffer(binaryOrBuffer, 'binary');
            }
        }

        return {
            encode: function (plain_text) {
                var iv = crypto.randomBytes(16);

                var plaintext = new Buffer(plain_text, 'utf8');

                var cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

                var ciphertextStart = forceBuffer(cipher.update(plaintext));
                var ciphertextEnd = forceBuffer(cipher.final());
                var ciphertext = Buffer.concat([ciphertextStart, ciphertextEnd]);

                return [base64urlencode(iv), base64urlencode(ciphertext)].join('.');
            },
            decode: function (content) {
                var components = content.split(".");

                var iv = base64urldecode(components[0]);
                var ciphertext = base64urldecode(components[1]);

                var cipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
                var plaintext = cipher.update(ciphertext, 'binary', 'utf8');
                plaintext += cipher.final('utf8');

                return plaintext;
            }
        }
    })()
};