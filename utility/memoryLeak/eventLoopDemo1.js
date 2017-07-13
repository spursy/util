console.log(`main 1`);
process.nextTick(function() {
    console.log(`process nextTick1`);
});

setTimeout(function() {
   console.log(`setTime out`);
   process.nextTick(function() {
       console.log(`process nextTick2`);
   }) 
}, 0);

new Promise(function(resolve, reject) {
    console.log(`promise`);
    resolve();
}).then(function() {
    console.log(`promise then`);
})

console.log(`main2`);

/**
 * result: 
main 1
promise
main2
process nextTick1
promise then
setTime out
process nextTick2
 */