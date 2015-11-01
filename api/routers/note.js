var app = require('../../app');
var note = require('../controllers/note');

app.post('/api/note', note.create);
app.put('/api/note/:_id', note.update);