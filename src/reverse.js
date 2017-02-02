const curry = require('./curry');

module.exports = curry((ifunctor) => ifunctor.slice().reverse());