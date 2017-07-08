function * calculate(x) {
    var y = yield 2 * (x + 1);
    var z =  yield y + 3;
}

var result = calculate(3);
console.log(`${JSON.stringify(result.next())}`);    // {"value":8,"done":false}
console.log(`${JSON.stringify(result.next(17))}`);   // {"value":20,"done":false}


// generator 函数体套用generator 函数体。
function * classB() {
    yield "zhangSan";
    yield "liSi";
}
function *printName() {
    yield "Spursyy";
    yield * classB();
    yield "YY";
}
for (let v of printName()){
  console.log(v);
}
