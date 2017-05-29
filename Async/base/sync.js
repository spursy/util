function waitFive(name, functionName) {
    var pus = 0;
    var currentDate = new Date();
    while(pus < 5000) {
        var now = new Date();
        pus = now - currentDate;
    }

    functionName(name);
}

waitFive("Game over", function process(name) {
    console.log('Wait five minutes was finished. ' + name);
});
console.log('The end.');

