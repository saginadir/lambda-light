const fold = require('./fold');

module.exports = (ifunctor) => fold(ifunctor.slice(-1));