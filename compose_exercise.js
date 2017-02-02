const _ = require('./src/index');

// Example Data
const CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}];

const isLastInStock = _.compose(_.prop('in_stock'), _.last);
console.log('In stock?', isLastInStock(CARS));

const nameOfFirstCar = _.compose(_.prop('name'), _.first);
console.log('First car name?', nameOfFirstCar(CARS));

const _average = (xs) => _.reduce(_.add, 0, xs) / xs.length;
const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));
console.log('Average car price?', averageDollarValue(CARS));

const _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize
const sanitizeNames = _.compose(_.map(_underscore), _.map(_.toLower),  _.map(_.prop('name')));
console.log('Sanitized car names:', sanitizeNames(CARS));

const _formatMoney = _.map(x => `$${x}`);
const availablePrices = _.pipe(
  _.filter(_.prop('in_stock')),
  _.map(_.prop('dollar_value')),
  _formatMoney,
  _.join(', ')
);
console.log(availablePrices(CARS));

const _highestHorsePower = (x, y) => x.horsepower >= y.horsepower ? x : y;
const fastestCar = _.pipe(_.maxBy(_highestHorsePower), _.prop('name'), _.append(' is the fastest car.'));
console.log(fastestCar(CARS));

console.log(_.prepend('cat', ['dog', 'wow']));