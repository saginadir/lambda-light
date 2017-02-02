const curry = require('./curry');

module.exports = curry((fn, ifunctor) => ifunctor.find(fn));
