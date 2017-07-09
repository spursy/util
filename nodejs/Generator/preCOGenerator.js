/**
 * Generator 函数体
 */
const fs = require('fs');
const path = require('path');
var fpath1 = path.join(__dirname, './test1.txt');
var fpath2 = path.join(__dirname, './test2.txt');

function readFileFun(fpath) {
    return new Promise(function(resolve, reject){
        fs.readFile(fpath, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

exports.gen = function *() {
    //yield 后是一个promise对象
    var content1 = yield readFileFun(fpath1); 
    var content2 = yield readFileFun(fpath2);
    console.log(`${content1}`); 
    console.log(`${content2}`); 
}

