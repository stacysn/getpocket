// models/index.js
// require runs the code from the given file and returns its exports
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/getpocket");
module.exports.Article = require('./article');
