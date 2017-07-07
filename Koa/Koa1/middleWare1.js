const Koa = require('Koa');
const app = module.exports = new Koa();
const convert = require('koa-convert');

app.use(convert(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log(`${this.method} ${this.url} ${ms}`); 
}));

app.use(convert(function *(ctx, next) {
    console.log(`${JSON.stringify(this)}`);
    this.body = 'Hello Body';
}));

if (!module.parent) app.listen(3000);