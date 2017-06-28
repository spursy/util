//Demo1
// function minimal_plugin(options) {
//     console.log(options)
// }

// require('seneca')().use(minimal_plugin, {foo: "bar"});

//Demo2
// make sure all plugins processed successfully.
function init(msg, respond) {
    console.log("expensive operation taking place now...DONE!")
    respond();
}

function math(options) {
    this.add({role: "math", cmd: "sum"}, function (msg, respond) {
        respond(null, {answer: msg.left + msg.right});
    })

    this.add({role: "math", cmd: "product"}, function(msg, respond) {
        respond(null, {answer: msg.left * msg.right});
    })

    this.add({init: "math"}, init)
}

require('seneca') ().use(math).act({role: "math", cmd: "sum", left: 5, right: 8}, function(err, respond) {
    if (err) console.log(err);
    else console.log(respond);
})