const Koa = require('Koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = new koaRouter();

function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n-2) : 1
}
app.use(router['routes']());

router.get('/', function(ctx, next) {
    var result = fibo(35);
    ctx.body = `${result}`;
});

if (!module.parent) {
    app.listen(8080);
    console.log(`Server was start.`);
}
    
