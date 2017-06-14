console.log('Demo1 ::::');

var person = {
    name: "Zhang san"
};

var proxy = new Proxy(person, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

console.log('::' + proxy.name);  // "Zhang san"
console.log('::' + proxy.age);  // undefined

