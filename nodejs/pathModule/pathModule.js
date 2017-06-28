const path = require('path');

console.log(__dirname);
var result = path.join(__dirname, "../Promise/manipulateFile.js");
var result2 = path.join(__dirname, "../../Promise/manipulateFile.js");

console.log(result);

console.log(result2);