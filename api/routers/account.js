var app = require('../../app');
var account = require('../controllers/account');

app.get('/api/account', account.get);

app.put('/api/account/:id', account.update);