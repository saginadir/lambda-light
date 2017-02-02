const curry = require('./curry');

module.exports = curry((what, replacement, str) => str.replace(what, replacement));