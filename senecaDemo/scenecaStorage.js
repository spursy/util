var seneca = require("seneca")();
seneca.use(require('seneca-entity'));

seneca.add({role: "employee", cmd: 'add'}, function(msg, respond) {
    seneca.make('employee').data$(msg.data).save$(respond);
})


var employee =  {
    name: "David",
    surname: "Gonzalez",
    position: "Software Developer"
}

 seneca.act({role: 'employee', cmd: 'add', data: employee}, function (err, msg) {
    console.log(msg);
});
