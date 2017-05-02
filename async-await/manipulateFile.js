var fs = require('fs');

// exports.readFile = function(path) {
//     fs.readFile(path);
// }

exports.readFile =  function(fpath, callback) {
      fs.readFile(fpath,  function (err, content) {
          callback(err, content);
     });
}

exports.writeFile = function(fpath, content, callback) {
     fs.writeFile(fpath, content,   function (err, content) {
         callback(err, content);
     })
}