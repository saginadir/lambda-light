const reCurry = (fn, ...args) =>
  args.length >= fn.length ? fn.apply(null, args) : reCurry.bind.apply(reCurry, [null, fn].concat(args));

module.exports = (fn) => reCurry.bind(null, fn);


