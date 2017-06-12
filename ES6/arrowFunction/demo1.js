var arr = [1, 2, 3];

arr.forEach(function(i) {
    console.log('common function ' + i);
})

arr.forEach(i => {
    console.log('arrow function ' + i);
})