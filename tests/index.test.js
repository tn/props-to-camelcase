const lib = require('../dist/index.bundle').default;
const assert = require('assert');

const NO_OBJ_ERR = 'TypeError: Function takes only objects, arrays and promises';

describe('propsToArray', () => {
  it('should return undefined if object is not passed', () => {
    assert.equal(lib('{}'), NO_OBJ_ERR);
  });

  it('should convert underscored object key to camelCase', () => {
    let output = lib({
      my_prop: 'myProp',
    });

    assert.equal(output.myProp, 'myProp');
  });

  it('should convert deep underscored object key to camelCase', () => {
    let output = lib({
      myProp: {
        my_prop: 'myProp',
      }
    });

    assert.equal(output.myProp.myProp, 'myProp');
  });

  it('should convert object keys from array', () => {
    let output = lib([
      { my_prop: 'myProp' },
    ]);

    assert.equal(output[0].myProp, 'myProp');
  });

  it('should convert result from Promise', done => {
    let promise = new Promise((resolve) => {
      resolve({ my_prop: 'myProp' });
    });

    let output = lib(promise);

    output
      .then((res) => {
        assert.equal(res.myProp, 'myProp');
        done();
      });
  });
});
