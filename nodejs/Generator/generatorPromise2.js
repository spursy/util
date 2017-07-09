const fs = require('fs');
const path = require('path');
const fpath1 = path.join(__dirname, './test1.txt');
const fpath2 = path.join(__dirname, './test2.txt');

function readFromFile(fpath){
    return new Promise(function(resolve, reject) {
        fs.readFile(fpath, function(err, data) {
            if(err) reject(err);
            else resolve(data); 
        })
    });
}
function writeToFile(fpath, content){
    return new Promise(function(resolve, reject) {
        fs.writeFile(fpath, content, function(err, data){
            if (err) reject(err);
            else resolve(data)
        });
    });
};

var gen = function* () {
    yield fs.readFile(fpath1);
    yield fs.writeFile(fpath2, txt1);
}

var g = gen();
g.next().value.then(
        result => console.log(`${result}`)
).then(resolve => {
    g.next("123").value.then(resolve => {
        console.log(`My name is ${resolve}`);
    });
})