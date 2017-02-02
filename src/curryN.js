const reCurry = (num, fn, ...args) =>
  args.length >= num ? fn.apply(null, args) : reCurry.bind.apply(reCurry, [null, num, fn].concat(args));

module.exports = (num, fn) => reCurry.bind(null, num, fn);