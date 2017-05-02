'use strict'
var Promise = require('bluebird');
const seneca = require('seneca')();
seneca.use(require('seneca-entity'));
seneca.use(require('./senecaStorageService'));

function getEmployee() {
    return new Promise (function (resolve, reject) {
        seneca.act({role: 'employee', cmd: 'find', id: "10013001"}, function(err, respond) {
            console.log("5")
            if (err) reject(err);
            else resolve(respond);
        })
    })
    // seneca.act({role: "employee", cmd: "find", id: "10013001"}, function(err, respond) {
    //     console.log("5")
    //     if (err) console.log(err);
    //     else console.log(respond)
    // })
}

exports.getEmployee = getEmployee;