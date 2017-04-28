var seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, function(msg, response) {
    var sum = msg.left + msg.right;

    // error is priority
    response(null, {answer: sum});
}); 

seneca.add({role: 'math', cmd: 'product'}, function(msg, response) {
    var product = msg.left * msg.right;

    // error is priority
    response(null, {answer: product});
});

seneca.act({role: 'math', cmd: 'sum', left: '3', right: '5'}, function (err, response) {
    if (err) consoel.log(err);
    else console.log(response.answer)
})

seneca.act({role: 'math', cmd: 'product', left: '3', right: '5'}, function (err, response) {
    if (err) consoel.log(err);
    else console.log(response.answer)
})