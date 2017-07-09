/**
 * automatic perform generator.
 */
var preCO = require('./preCOGenerator');

function run(gen) {    
    var g = gen()
    function next(data) {
        var result = g.next(data);
        // 如果generator 遍历结束，直接返回值。
        if (result.done) return result.value;
        // 通过then() 获取Promise 对象的返回值。
        result.value.then(data => {
            // 递归调用next()
            next(data)
        })
    }
    next();
}

run(preCO.gen);       
