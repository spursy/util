// function foo() {
//     var a = 100;
//     function print() {
//         console.log(a);      
//     }
//     return print;
// }

// var log = foo();
// log();


var each = function (object, callback, args) {
    var name;
    var i = 0;

    var length = object.length;
    var isObj = length === undefined || typeof (object) == "function";
    if (args) {
        if (isObj) {
            for (name in object) {
                if (callback.apply(object[name], args) === false) {
                    break;
                }
            }
        }
        else {
            for (; i < length; ) {
                if (callback.apply(object[i++], args) === false) {
                    break;
                }
            }
        }
    } 
    else {  
        if (isObj) {  
            for (name in object) {
                if (callback.call(object[name], name, object[name]) === false) {
                    break;
                }
            }
        }
        else {
            for (var value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) {
            }
        }
    }
    return object;
}
 
var arr = [1, 2, 3, 4, 5];
each(arr, function (index, value) {
    console.log(index + ':' + value);
}); 
