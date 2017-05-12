var path = require('path');
var finder = require('./recursionSync');
var fpath = path.join(__dirname, '../../'); 
console.log("start::" + fpath);

try {
    var results = finder.findSync(/util*./, fpath);
    console.log(results);
} catch(err) {
    console.error(err);
}