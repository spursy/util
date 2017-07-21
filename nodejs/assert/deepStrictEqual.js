const assert = require('assert');

// assert.deepEqual({a: 1}, {a: '1'}); // passed
// assert.deepStrictEqual({a: 1}, {a: '1'}); // failed

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);
// assert.deepEqual(object, fakeDate); // passed
// assert.deepStrictEqual(object, fakeDate); // failed

assert.deepEqual(date, fakeDate);  // passed
assert.deepStrictEqual(date, fakeDate);