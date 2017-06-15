var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'abc';
console.log('::'+target.a); // 'abc'