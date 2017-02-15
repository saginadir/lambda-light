const subtract = require('./subtract');
const pipe = require('./pipe');

module.exports = pipe(subtract, Math.abs);
