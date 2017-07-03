var obj = { 
    // toString: function() { 
    //     console.log('call obj.toString'); 
    //     return 'AAAA'; 
    // }
    // , 
    valueOf: function() { 
        console.log('call obj.valueOf');
        return '110'; 
    }
}
console.log(obj + '1');

console.log(obj.toString())

// var obj1 = {
//     name: 'Coco',
//     toString: function() {
//         return this.name;
//     }
// };
// console.log(obj1 + '1');