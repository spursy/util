var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
})

console.log('::'+ proxy.a);  // 35
console.log('::'+ proxy.time);  // 35