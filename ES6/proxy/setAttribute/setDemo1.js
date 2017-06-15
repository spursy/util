let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) 
                throw new TypeError("The age is not integer.");
        }
        if (value > 200) {
            throw new TypeError("The age should less than 200.");
        }
    }
};

var proxy = new Proxy({}, validator);
// proxy.age = 200;
proxy.age = 'age';