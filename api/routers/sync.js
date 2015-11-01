var app = require('../../app');
var sync = require('../controllers/sync');
var lib = require('../../lib');

var authenticate = function (req, res, next) {
    if (req.headers['beyondpad-token']) {
        req.syncToken = JSON.parse(lib.crypto.decode(req.headers['beyondpad-token']));
        req.user = req.syncToken.user;

        if (req.syncToken.expire > Date.now()) {
            next();
        } else {
            res.sendStatus(409);
        }
    } else {
        res.sendStatus(403);
    }
}

var authenticateRefresh = function (req, res, next) {
    if (req.headers['beyondpad-token'] && req.headers['beyondpad-refresh-token']) {
        req.syncToken = JSON.parse(lib.crypto.decode(req.headers['beyondpad-token']));
        req.syncToken.refreshToken = req.headers['beyondpad-refresh-token'];
        next();
    } else {
        res.sendStatus(403);
    }
}

app.post('/api/sync/account', authenticate, sync.account);
app.post('/api/sync/boards', authenticate, sync.boards);
app.post('/api/sync/notes', authenticate, sync.notes);

app.get('/api/sync/refreshhandshake', authenticateRefresh, sync.refreshHandshake);

app.post('/api/sync/registergcmtoken', authenticate, sync.registerGCMToken);