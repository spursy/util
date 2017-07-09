
function getName(params) {
    return Promise.resolve(params);
}

var gen = function * () {
    var f1 = yield getName('Spursyy');
    var f2 = yield getName("YY");
    console.log(`generator function is done.`);
}

var g = gen();
g.next().value.then(resolve => {
    console.log(`My name is ${resolve}`);
}).then(resolve => {
    g.next().value.then(resolve => {
        console.log(`My name is ${resolve}`);
    });
})