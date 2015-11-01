var app = require('../../app');
var board = require('../controllers/board');

app.post('/api/board', board.create);
app.get('/api/board/:id', board.get);
app.put('/api/board/:id', board.update);
app.delete('/api/board/:id', board.remove);