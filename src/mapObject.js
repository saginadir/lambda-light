const curry = require('./curry');
const toPairs = require('./toPairs');
const fromPairs = require('./fromPairs');
const compose = require('./compose');
const map = require('./map');

const pairToPair = curry((fn, pair) => [pair[0], fn(pair[1], pair[0])]);

module.exports = curry((fn, ifunctor) => compose(fromPairs, map(pairToPair(fn)), toPairs)(ifunctor));
