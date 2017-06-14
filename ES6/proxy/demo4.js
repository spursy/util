var handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype
        }
        return 'Hello, ' + name;
    },
    apply: function(target, thisBinding, args) {
        return args[0];
    },
    construct: function(target, args) {
        return {value: args[1]};
    }    
};

var fProxy = new Proxy(function(x, y) {
    return x + y;
}, handler);


console.log('::' + fProxy(1,2));  // 1
console.log('::' + JSON.stringify((new fProxy(1,2)))); // {value: 2}
console.log('::' + fProxy.time);  // "Hello time"
console.log('::' + fProxy.prototype === Object.prototype);