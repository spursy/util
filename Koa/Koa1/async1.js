const koa = require('koa');
const convert = require('koa-convert');
const app = new koa();

app.use(convert(function * () {
    function delay(internal) {
        return function (done) {
            setTimeout(function() {
                done(null, 'delay done');
            }, internal); 
        };
    };

    var time = Date.now();
    console.log(`receive request.`);
    var body = yield delay(5000);
    console.log(`${Date.now() - time}`);

    this.body = body;
}))

app.listen(3000);