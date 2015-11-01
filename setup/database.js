var mongoose = require('mongoose');
var config = require('../config');

mongoose.beyondpad = mongoose.createConnection(config.connectionString);

mongoose.beyondpad.on('error', console.error.bind(console, 'Connection to DB error'));
mongoose.beyondpad.once('open', console.error.bind(console, 'Connected to DB'));

module.exports = mongoose;