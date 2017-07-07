const Koa = require('Koa');
const app = module.exports = new Koa();
const convert = require('koa-convert');

// x-response-time
app.use(convert(function* (next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
}))

// logger
app.use(convert(function* (next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log(`${this.method} ${this.url} ${ms}`); 
}))

app.use(convert(function* (next){
    this.body = 'Hell World.'
}))

if (!module.parent) app.listen(3000); 