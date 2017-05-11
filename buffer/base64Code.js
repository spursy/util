var user = "spursyy";
var passWord = "Woshishui";
var authstring = user + ',' + passWord;

var buf = new Buffer(authstring);
var encoded = buf.toString('base64');
console.log(encoded);