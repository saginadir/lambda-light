# Lambda Light :bulb:

## This project is in beta, use at your own peril :skull:

Lambda Light is a better faster stronger version for functional programming

## API

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
