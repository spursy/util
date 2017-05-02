'use strict'
var addSenecaStorage = require('./addSenecaStorage')
var getSenecaStorage = require('./getSenecaStorage')

addSenecaStorage.addEmployee().then(function(data) {
    console.log("data1::::" + data);
    getSenecaStorage.getEmployee().then(function(data) {
        console.log("data2::::"+ data);
    }) 
})