const mongoose = require('mongoose');
const mongoUri = 'mongodb://detail-part:javier123@ds157853.mlab.com:57853/detail-part';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;