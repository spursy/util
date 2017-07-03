var person = {
    name: "Spursy",
    age: 15
}
var student = Object.create(person);
student.name = "YY";

console.log(`person name: ${person.name}`);   // YY
console.log(`student name: ${student.name}`);   // Spursy


var animal = {
    catagory: {
        dogA: "small dogs"
    }
}
var dog = Object.create(animal);
dog.catagory = {
    dogB: "big dogs"
}
console.log(`animal catagory: ${JSON.stringify(dog.catagory)}`);     // {dogA: "small dogs"}
console.log(`animal catagory: ${JSON.stringify(animal.catagory)}`);      // {dogB: "big dogs"}


student.__proto__.name = 'Yang Yang'

