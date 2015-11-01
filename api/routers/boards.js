var app = require('../../app');
var boards = require('../controllers/boards');

app.get('/api/boards', boards.get);