var name = "Bob", time = "today";
var mes = `Hello ${name}, how are you ${time}?`
console.log('::' + `Hello ${name}, how are you ${time}?`);

throw TypeError(`Hello ${name}, how are you ${time}?`);