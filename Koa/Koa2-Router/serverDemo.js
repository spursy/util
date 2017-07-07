'use strict'
const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new koaRouter();

app.use(router['routes']());

router.get('/index', function(ctx, next) {
    ctx.body = 'Hello Koa2.0';
});

app.listen(3000, () => console.log(`Koa start at 3000 ...`));

