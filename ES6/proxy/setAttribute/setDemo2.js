var handler = {
    set: function(target, prop, value) {
        validator(prop, 'set');
        target[prop] = value;
        return true;
    },
    get: function(target, prop){
        validator(prop, 'get');
        return target[prop];
    }
}

function validator(key, action) {
    console.log('key::' + key);
    if(key[0] === '_')
        throw new Error(`Invalid attempt to ${action} private ${key} property`);
}

var proxy = new Proxy({}, handler);
proxy._age = 20;
