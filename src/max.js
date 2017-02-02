const reduce = require('./reduce');

const _keepHighest = (x, y) => x >= y ? x : y;
module.exports = reduce(_keepHighest, -Infinity);