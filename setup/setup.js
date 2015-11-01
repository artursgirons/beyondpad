var config = require('../config');
var app = require('../app');
var morgan = require('morgan')

if (config.env !== 'prod') {
    app.use(morgan('dev'));
}

require('./router');