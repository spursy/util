var preCO = require('./preCOGenerator');

function run(gen) {    
    var g = gen()
    function next(data) {
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(data => {
            next(data)
        })
    }
    next();
}

run(preCO.gen);       
