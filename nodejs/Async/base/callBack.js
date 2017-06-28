/**
 * 1. Not return result directly
 * 2. pass function as parameter
 * 3. do something in call back function
 * @param {*} name 
 * @param {*} callback 
 */

function waitFive(name, callback) {
    callback(name);
}

var callback = function(name) {
    console.log('I am ' + name);
};

waitFive("Spursy", callback);