var fs = require('fs');
try{
    fs.readFileSync('./file.txt');
}
catch(err) {
    console.log(err);
}