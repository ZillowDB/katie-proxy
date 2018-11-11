const Detail = require('./Detail.js');

const dropAll = function() {
  return Detail.remove({});
};

dropAll();