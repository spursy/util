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
    return new Promise(function(resolve, reject) {
        var ctx = this;
        var isValid = (typeof(gen) === 'function');
        var g = gen();
        function step(nextFun) {
            var next;
            try {
                next = nextFun.value();
            } catch (error) {
                return reject(error);
            }
            if (next.done) return resolve(done);

            Promise.resolve(next.value).then(
                result => step(gen.next(result)),
                error => step(gen.throw(e))
            )
        }
        step(g.next());
    });
}

spawn(function *() {
    var contet = yield readFile(fpath1);
    // yield writeFile(fpath2, contet);
});

// var gen = function *() {
//     var data = yield readFileThunify(fpath1);
//     yield writeFileThunify(fpath2, data);
// }