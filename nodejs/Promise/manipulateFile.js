var Promise = require('bluebird')
var fs = require('fs')

exports.writeFile = function(path, content) {
    return new Promise (function(resolve, reject) {
        fs.writeFile(path, content, {encoding: 'utf-8'}, function(err, content) {
            if (err) return reject(content)
            else return resolve(content)
        });      
    })
}

exports.readFile = function(path, encoding) {
    return new Promise(function(resolve, reject){
        fs.readFile(path, encoding,function (err, content) {
            if (err) return reject(err)
            else return resolve(content)
        })
    })
}  