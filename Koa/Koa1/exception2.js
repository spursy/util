const Koa = require('Koa');
const convert = require('koa-convert');
const app = new Koa();

app.use(convert(function * () {
    var userID = this.query.UserID;

    try{
        this.body = yield user.findById(userID);
    } catch(err) {
        this.status = err.status || 403;
        this.body = 'incorrect parameters';
        this.app.emit('error', err, this);
    }
}))

if (!module.parent) app.listen(3000);