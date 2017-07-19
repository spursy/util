const asyncException = require('asyncexception');

function throwException() {
    setTimeout(function() {
        const localStack = new Error();
        console.log(`${localStack.stack}`);
        console.log(`-----------`);       
        console.log(asyncException.getAsyncException());
    }, 100);
}

throwException();