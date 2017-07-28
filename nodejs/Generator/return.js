var g = function * () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var f = g();
console.log(`${JSON.stringify(f.next())}`);     //{'value': 1, 'done': false}
console.log(`${JSON.stringify(f.return(6))}`);  //{'value': 6, 'done': false}
console.log(`${JSON.stringify(f.next())}`);     //{'done': false}
