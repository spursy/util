const assert = require('assert');

assert.equal(1, 1);

assert.equal({a: {b: 1}}, {a: {b: 1}});  //failed
assert.deepEqual({a: {b: 1}}, {a: {b: 1}});  //true
assert.deepStrictEqual({a: {b: 1}}, {a: {b: 1}});  //failed