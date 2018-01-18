# PropsToCamelCase [![Build Status](https://travis-ci.org/tn/props-to-camelcase.svg?branch=master)](https://travis-ci.org/tn/props-to-camelcase)

This library convert underscored object keys to camelCase.
It's helpful when you get some props or response from third party like APIs or libraries when your ESlint config configured to strict camelCase properties.

## Examples

```javascript
import propsToCamelCase from 'propsToCamelCase';

let obj = propsToCamelCase({
  user_id: 1,
  user_name: 'John Doe'
});

console.log(obj);
// { userId: 1, userName: 'John Doe' }
```

```javascript
let arr = propsToCamelCase([
  { user_id: 1 },
  { user_id: 2 }
]);

console.log(arr);
// [{ userId: 1 }, { userId: 2 }]
```

```javascript
fetch('/users')
  .then(res => res.json())
  // [{ user_id: 1, user_name: 'John Doe' }]
  .then(propsToCamelCase)
  .then(res => console.log(res));

// [{ userId: 1, userName: 'John Doe' }]
```

## Scripts
```bash
npm start # development mode
npm build # build the library
npm test  # run the tests
```
