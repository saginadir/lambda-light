# Lambda Light :bulb:

## This project is in beta, use at your own peril :skull:

## Contributions are welcomed :heart:

Lambda Light is a better faster stronger version for functional programming

## API

### Import

#### ES6
```js
// import all
import Lambda from 'lambda-light'

// import individual pieces to keep your project smaller
import curry from 'lambda-light/lib/curry'
import add from 'lambda-light/lib/add'
import map from 'lambda-light/lib/map'
```

### add

Apply the (+) operator to a and b

```js
  // a -> b -> c
  // Int -> Int -> Int
  // String -> String -> String
  
  // Curried
  const inc1 = add(1);
  inc1(10); // 11
  
  // Call it
  add(1, 2); // 3
```
