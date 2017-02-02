// https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a#.j9qvt6owj

module.exports = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));