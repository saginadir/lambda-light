const curry = require('./curry');

module.exports = curry((seperator, str) => str.split(seperator));
