const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const fpath1 = path.join(__dirname, './test1.txt');
const fpath2 = path.join(__dirname, './test2.txt');

var readFileThunify = thunkify(fs.readFile);
var writeFileThunify = thunkify(fs.writeFile);
var gen = function *() {
    var data = yield readFileThunify(fpath1);
    yield writeFileThunify(fpath2, data);
}

var g = gen();
g.next().value((err, data)  => {
    if (err) console.log(`${err}`);
    else {
        console.log(`${data}`);
        // 将读取到的内容传给写入文件的方法中
        g.next(data).value((err, data) => {
            if (err) console.log(`${err}`);
            else console.log(`${data}`);
        })
    }
})