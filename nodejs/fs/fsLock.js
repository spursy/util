var fs = require('fs');

fs.writeFile('./file.txt', process.pid, {flags: 'wx'}, function (err) {
    if (err) console.log(err);  
})

fs.writeFile('./file.txt', process.pid, {flags: 'wx'}, function (err) {
    if (err) console.log(err); 
})