const { filter, split, map, match, replace, max, curry, slice, tail, take, head, sum, curryN } = require('./src/index');

const setStyle = curry((attr, value, el) => { console.log(`Setting ${attr}: ${value} on ${el}`); });

const setColorRed = setStyle('color', '#FF0000');
const setColorBlue = setStyle('color', '#0000FF');

console.log(setColorRed('my element'));
console.log(setStyle('color', '#0000FF', 'my other element'));
