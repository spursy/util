/**
 * manual perform generator.
 */
var preCO = require('./preCOGenerator');
var g = preCO.gen();
g.next().value.then((data) => {
    // 通过next() 函数向generator 函数体传值
    g.next(data).value.then((data1) => {
        g.next(data1);
    })
})
