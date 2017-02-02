const curry = require('./curry');

module.exports = curry((fn, initial, ifunctor) => ifunctor.reduce((res, x) => fn(res, x) , initial));
