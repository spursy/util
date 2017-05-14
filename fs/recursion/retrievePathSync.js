var path = require('path');
var finderSync = require('./recursionSync');
var finderAsync = require('./recursionAsync');
var fpath = path.join(__dirname, '../'); 
console.log("start::" + fpath);

try {
    // var results = finderSync.findSync(/re*./, fpath);
    //  console.log(results);
    var results = finderAsync.finderAsync(/re*./, fpath, function (err, results) {
        if (err) console.log(err);
        console.log(results);
    });
} catch(err) {
    console.error(err);
}