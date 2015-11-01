var config = require('./config');
var app = require('./app');

app.listen(config.port, function () {
    console.log('Beyondpad listening on port : ' + config.port);
});