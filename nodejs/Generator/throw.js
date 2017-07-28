var g = function* () {
     yield
     throw Error('inner error')
}

var i = g()
i.next()
try {
    i.throw('exception A')
    // i.next()
} catch(e) {
    console.log(`error log is ${e}`);
}

