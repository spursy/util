
var seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, function (msg, response) {
    var result = msg.left + msg.right;
    console.log(result);
    response(null, {answer: result});
})

seneca.add({role: 'math', cmd: 'sum', integer: true}, function(msg, response) {
    // reuse pattern
    this.act({role: 'math', cmd: 'sum', left: Math.floor(msg.left), right: Math.floor(msg.right)}, response)
})

// seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5}, function (err, response) {
//     if (err) console.log(err);
//     else console.log(response)
// })

seneca.act({role: 'math', cmd: 'sum',  left: 1.5, right: 2.5, integer: true,}, function (err, response) {
    if (err) console.log(err);
    else console.log(response)
})