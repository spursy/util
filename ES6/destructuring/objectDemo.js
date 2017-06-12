// 如果变量名与属性名一致
var {foo, bar} = {foo: '123', bar: '456'}
console.log('foo::' + foo);
console.log('bar::' + bar);

// 如果变量名与属性名不一致
var {foo1, bar1} = {foo: '123', bar: '456'}
console.log('foo::' + foo1);
console.log('bar::' + bar1);

//如果变量名与属性名不一致，必须写成下面这样
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
var {foo:foo1, bar:bar1} = {foo: '123', bar: '456'}
console.log('foo::' + foo1);
console.log('bar::' + bar1);


