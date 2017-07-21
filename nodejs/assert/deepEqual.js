const assert = require('assert');

const obj1 = {
    a : {
        b: 1
    }
}

const obj2 = {
    a : {
        b : 2
    }
}

const obj3 = {
    a : {
        b : 1
    }
}

const obj4 = Object.create(obj3);

// assert.deepEqual(obj1, obj2); // throw exception
// assert.deepEqual(obj1, obj3);  // Passed
assert.deepEqual(obj3, obj4); // throw exception, due to obj3 is prototype


