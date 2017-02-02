const curry = require('./curry');
const reduce = require('./reduce');

module.exports = curry((fn, ifunctor) => reduce(fn, -Infinity, ifunctor));