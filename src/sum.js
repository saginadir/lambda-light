const reduce = require('./reduce');

const _sum = (x, y) => x + y;
module.exports = reduce(_sum, 0);