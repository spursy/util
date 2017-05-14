var fs = require('fs');
var path = require('path');
var join = require('path').join;
var fpath = __dirname;

var data = fs.readdirSync(fpath);
console.log('data:::' + data);

data.forEach(function(element) {
    var name = /retrievePathSync*./;
    var isValid = name.test(element);
    console.log('isValid:::' + isValid);

    console.log('file:::' + element); 
    var fpaths = join(fpath, element);
    console.log('fpath:::' + fpaths);
}, this);
 
// var stats = fs.statSync(fpath);
// console.log('stas::' + JSON.stringify(stats));

// console.log('isDirectory::' + stats.isDirectory());
// console.log('isFile::' + stats.isFile() );