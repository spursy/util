function filter() {
    var callParams = arguments ? Array.prototype.slice.call(arguments) : [];
    var filterFun = callParams.pop();
    if (typeof
     filterFun != 'function') {
        return new Promise(function(resolve, reject) {
            resolve();
        });
        
    }
    return new Promise(function (resolve, reject) {
        callParams.push(function() {resolve(arguments);});
        filterFun.apply(this, callParams);
    }); 
}

var co = require('co');
var fs = require('fs');
co(function* () {
    var result = yield filter('./file.txt', 'utf8', fs.readFile);
    if (result[0] !== null) return result[0];

    var fileStr = result[1];
    if (fileStr == 'jike') {
        console.log('good');
    } else {
        console.log('some error');
    }
    return fileStr;
}).then(function(val) {
    console.log(val);
}, function(err) {
    console.log(err);
})