var fs = require('fs')

var obj = function *() {
    function contactFile() {
        var text1 =  fs.readFile('./test1.txt', 'utf-8');
        var text2 =  fs.readFile('./test2.txt', 'utf-8');
        return Buffer.concat([text1, text2]).toString();
    }
}