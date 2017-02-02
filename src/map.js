const curry = require('./curry');
const toPairs = require('./toPairs');
const fromPairs = require('./fromPairs');
const compose = require('./compose');

const map = curry((fn, ifunctor) => {
  if(typeof ifunctor === 'object' && !Array.isArray(ifunctor))
    return  compose(fromPairs, map(pair => [pair[0], fn(pair[1], pair[0])]), toPairs)(ifunctor);
  else
    return ifunctor.map(fn)
});

module.exports = map;
