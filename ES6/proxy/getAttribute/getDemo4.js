const target = Object.defineProperties({}, {
    foo: {
        value: 'abc'
        ,
        writable: false,
        configurable: false
    },
});

const handler = {
    get(target, propKey) {
        // console.log('target::' + target);
        // console.log('propKey::' + propKey);
        console.log(':1:' + propKey instanceof String);
        console.log('::' + typeof(propKey));
        console.log('::' + propKey[1]);
        return target[propKey]
    }
};

const proxy = new Proxy(target, handler);

console.log(':::' + proxy.foo);

var test = 'test';
console.log('::'+ test[2]);