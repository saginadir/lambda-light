const { filter, split, map, match, replace, max, curry, slice, tail, take } = require('ramda');

for(let i = 0; i < 1000000; i++) {
  const noVowels = replace(/[aeiouy]/ig);

  const censored = noVowels("*");

  censored('Chocolate Rain');

  const words = split(' ');

  const sentences = map(words);

  words('This is my first curry fn');

  sentences(['This is my first curry fn', 'another one']);

  const matchQs = match(/q/i);

  const filterQs = filter(matchQs);

  max(['a','c','b']);

  tail([3,2,1]);

  take(2, [3,2,1]);

  slice(0, 2, [3,2,1]);
}

