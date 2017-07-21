const assert = require('assert');

// assert.doesNotThrow(() => {
//     throw new TypeError('error mes')
// }, SyntaxError);

// assert.doesNotThrow(() => {
//     throw new TypeError('error mes');
// }, TypeError);

assert.doesNotThrow(() => {
    throw new TypeError('error mes');
}, TypeError, 'throw exception')