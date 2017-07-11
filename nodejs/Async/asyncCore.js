const fs = require('fs');
const path = require('path');
const fpath1 = path.join(__dirname, './test1.txt');
const fpath2 = path.join(__dirname, './test1.txt');

function readFile(fpath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fpath, function(error, data) {
            if (error) reject(error);
            resolve(data);
        })
    });
}

function writeFile(fpath, content) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fpath, function(error, data) {
            if (error) reject(error);
            resolve(data);
        })
    });
}

function spawn(gen) {
    var ctx = this;
    return new Promise(function(resolve, reject) {
        var ctx = this;
        var isValid = (typeof(gen) === 'function');
        var g = gen.call(ctx);
        function step(nextFun) {
            var isValid = (typeof nextFun === 'function');
            var next;
            try {
                next = nextFun();
            } catch (error) {
                return reject(error);
            }
            if (next.done) return resolve(next.value);

            Promise.resolve(next.value).then(
                result => step(function(){ return g.next(result)}),
                error => step(function(){return g.throw(e)})
            )
        }
        step(function() { return g.next(undefined); });
    });
}

spawn(function *() {
    var contet = yield readFile(fpath1);
    yield writeFile(fpath2, contet);
});