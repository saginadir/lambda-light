const curry = require('./curry');

module.exports = curry((propName, ob) => ob[propName]);