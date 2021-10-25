const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/portallibras');
mongoose.Promise = global.Promise;

module.exports = mongoose;