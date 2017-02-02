const curry = require('./curry');

// Todo: deserves a huge improvement.
module.exports = curry((a, b) => b.slice().reverse().concat(a).reverse());