const compose = require('./compose');

module.exports = (...fns) => compose(...fns.reverse());