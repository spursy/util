var Promise = require('bluebird')
var fs = require('fs')
var path =require('path')
var fpath = path.join(__dirname, './test.txt');  

var obj = (function() {
    var variable;

    return {
        get: function() {
            if (variable)
                return Promise.resolve(variable);
            
            return Promise.promisify(fs.readFile) (fpath, "utf-8");
        },
        set: function(params) {
            console.log(params)
            variable = params
            return Promise.resolve(variable);
        }
    }
})

module.exports = obj;
