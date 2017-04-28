var promiseObj = require("../Promise/promiseObject")

var obj = new promiseObj();
obj.get()
    .then(function (data) {
        console.log(data);
    })