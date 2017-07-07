const koa = require('Koa');
const app = new koa();
const convert = require('koa-convert');

app.use(convert(function *(next) {
    try {
        yield next;
    } catch(err) {
        this.status = err.status || 500;
        this.body = 'Something exploded.'
    }
}));

app.use(convert(function * () {
    throw new Error('boom boom');
}))

app.listen(3000);