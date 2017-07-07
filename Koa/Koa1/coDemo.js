const koa = require('koa');
const convert = require('koa-convert');
const app = new koa();

app.use(convert(function* f1(next) {
  console.log('f1: pre next');
  yield next;
  console.log('f1: post next');
  yield next;
  console.log('f1: done');
}));

app.use(convert(function* f2(next) {
  console.log('  f2: pre next');
  yield next;
  console.log('  f2: post next');
  yield next;
  console.log('  f2: done');
}));

app.use(convert(function* f3(next) {
  console.log('  f3: pre next');
  yield next;
  console.log('  f3: post next');
  yield next;
  console.log('  f3: done');
}));

app.use(convert(function* (next) {
  console.log('hello world')
  this.body = 'hello world';
}));

app.listen(3000);