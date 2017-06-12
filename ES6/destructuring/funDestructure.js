function add ([a,b]) {
    return a + b;
}
var result = add([3,4])
console.log('result::' + result);

// map function
var resultMap = [[1,2], [4,5]].map(([a,b]) => a + b)
console.log('resultMap:: ' + resultMap);

// default function destructure
[1, undefined, 3].map((x = 'yes') => x);
