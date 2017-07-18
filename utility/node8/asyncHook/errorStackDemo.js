function ThrowException() {
    setTimeout(function() {
        const localStack = new Error();
        console.log(`${localStack.stack}`);
    }, 100);
}

ThrowException()

/**
 * D:\nodejs\nodejs Snippets\util\utility\node8\asyncHook>node errorStackDemo
Error
    at Timeout._onTimeout (D:\nodejs\nodejs Snippets\util\utility\node8\asyncH
k\errorStackDemo.js:3:28)
    at ontimeout (timers.js:488:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:283:5)
 */