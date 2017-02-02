const curry = require('./curry');

module.exports = curry((ammount ,ifunctor) => ifunctor.slice(0, ammount));