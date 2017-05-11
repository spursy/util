var fs = require('fs')
var mime = 'image/png';
var encoding = 'base64';
var data = fs.readFileSync('./bd_logo.png').toString(encoding);
var uri = 'data' + mime + ';' + encoding + ',' + data;
console.log(uri);

var picData = uri.split(',')[1];
var picBuf = Buffer(picData, 'base64');
fs.writeFileSync('./second_bd_logo.png', picBuf);


