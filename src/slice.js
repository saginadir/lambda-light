const curry = require('./curry');

module.exports = curry((from, to, ifunctor) => ifunctor.slice(from, to));
