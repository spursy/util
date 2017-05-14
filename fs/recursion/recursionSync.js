var fs = require('fs');
var join = require('path').join;

exports.findSync = function(name, startPath) {
    var results = [];
    
    function finder(path) {   
        var files = fs.readdirSync(path);
        for (var i = 0; i < files.length; i ++) {
            var fpath = join(path, files[i]);
            var stats = fs.statSync(fpath);

            if (stats.isDirectory()) finder(fpath);
            if (stats.isFile() && name.test(files[i])) results.push(fpath);
        }
    }

    console.log('name::' + name);
    console.log('startPath::' + startPath);
    finder(startPath);
    return results;
}
