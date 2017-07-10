var checkUserName = function(name) {
    var promise = new Promise(function(resolve, reject) {
        if (name == 'Spursy')
            resolve('success');
        else
            reject('failed');
    });

    return promise;
} 

checkUserName('Spursy').then(
    result => {
        console.log(`the result is ${result}.`);
}).catch(
    error => {
        console.log(`The error is ${error}.`);
    }
);
checkUserName('YY').then(
    result => {
        console.log(`the result is ${result}.`);
}).catch(
    error => {
        console.log(`The error is ${error}.`);
    }
);


// Promise.all

var p = Promise.all([p1, p2, p3])
p.then(
    resolved => {}
).catch(
    error => {}
)

// Promise.resolve

Promise.resolve("Spursyy")

var p = new Promise(function(resolve, reject) {
    resolve("Spursyy");
})


// Promise.reject()

Promise.reject("YY");

var p = new Promise(function(resolve, reject) {
    reject("YY");
})