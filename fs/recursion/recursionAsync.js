var fs = require('fs');
var join = require('path').join;
exports.finderAsync = function (nameRe, startPath, cb) {
    var results = [];
    var asyncOps = 0;
    var errored = false;

    function error(error) {
        if (!error) console.log(error);
        errored = true;
   }

   function finder(path) {
       asyncOps++;
       fs.readdir(path, function (err, files) {
           if (err) return error(err);

           files.forEach(function(file) {
               var fpath = join(path, file);
               asyncOps ++;
               fs.stat(fpath, function (err, stats) {
                  
                   if (err) return error(err);
                   if (stats.isDirectory()) finder(fpath);
                   if (stats.isFile && nameRe.test(file)) results.push(fpath); 

                   asyncOps --;
                   if (asyncOps === 0) cb(null, results);
               })
           }, this)
           asyncOps --;
           if (asyncOps === 0) cb(null, results);
       }); 
   }

   finder(startPath);
}