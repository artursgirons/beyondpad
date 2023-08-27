var config = require('../config');
var app = require('../app');
var morgan = require('morgan')

app.enable('trust proxy');

if (config.env !== 'production') {
    app.use(morgan('dev'));
}

require('./router');