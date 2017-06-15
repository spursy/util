var twice = {
  apply (target, ctx, args) {
    console.log(':::' + args);
    console.log(':::' + arguments);
    return Reflect.apply(...arguments) * 2;
  }
};
function sum (left, right) {
  return left + right;
};
var proxy = new Proxy(sum, twice);
var result = proxy(1, 2) // 6
console.log('::' + result);

proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30