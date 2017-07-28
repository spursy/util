const Koa = require('Koa');
const koaRouter = require('koa-router');
const numCpus = require('os').cpus().length;
const cluster = require('cluster');

const app = new Koa();
const router = new koaRouter();

if (cluster.isMaster) {
    console.log(`${numCpus}`);
    for (var index = 0; index < numCpus; index++) {
        cluster.fork();
    }
} else {
    app.use(router['routes']());
    router.get('/', function(ctx, next) {
        var result = fibo(35);
        ctx.body = `${result}`;
    });
    if (!module.parent) {
        app.listen(8080);
        console.log(`Server was start.`);
    }
}

function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n-2) : 1
}

    
