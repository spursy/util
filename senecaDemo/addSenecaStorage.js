'use strict'
var Promise = require('bluebird');
const seneca = require('seneca')();
seneca.use(require('seneca-entity'));
seneca.use(require('./senecaStorageService'));

var employee =  {
    id: "10013001",
    name: "David",
    surname: "Gonzalez",
    position: "Software Developer"
}

function addEmployee() {
    return new Promise(function(resolve, reject) {
        console.log("1")
        seneca.act({role: 'employee', cmd: 'add', data: employee}, function (err, msg) {
            if (err) reject(err)
            else resolve(msg)
        });
        console.log("2")
    });
}

exports.addEmployee = addEmployee;

// function getEmployee(params) {
//     console.log("4")
//     seneca.act({role: "employee", cmd: "find", id: "10013001"}, function(err, respond) {
//         console.log("5")
//         if (err) console.log(err);
//         else console.log(respond)
//     })
// }

// // getEmployee();

// (async => {
//     await addEmplyee();
//     await getEmployee();
// })()
