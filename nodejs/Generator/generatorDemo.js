function * printUsername() {
    yield "Sursyy";
    yield "YY";
    return "a bu";    
}

var print = printUsername();
console.log(`${JSON.stringify(print.next())}`);  // {"value": Spursyy, "done": false}
console.log(`${JSON.stringify(print.next())}`);  // {"value": YY, "done": false}
console.log(`${JSON.stringify(print.next())}`);  // {"value": a bu, "done": true}