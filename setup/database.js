var mongoose = require("mongoose");
var config = require("../config");

mongoose.beyondpad = mongoose.createConnection(config.connectionString);

mongoose.beyondpad.on("error", function () {
  console.error("<<<Connection to DB error>>>");
  process.exit(1);
});

mongoose.beyondpad.once("open", console.log.bind(console, "Connected to DB"));

module.exports = mongoose;
