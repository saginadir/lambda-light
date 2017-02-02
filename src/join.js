const curry = require('./curry');

module.exports = curry((deliminator, ifunctor) => ifunctor.join(deliminator));
