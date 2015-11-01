var app = require('../../app');
var notes = require('../controllers/notes');

app.post('/api/notes', notes.post);

app.post('/api/notes/update/tags', notes.update.tags);
app.post('/api/notes/update/status', notes.update.status);
app.post('/api/notes/update/color', notes.update.color);

app.delete('/api/notes/remove', notes.remove);

app.post('/api/notes/upload/list', notes.upload.list);