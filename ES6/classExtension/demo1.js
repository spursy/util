class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('My name is ' + this.name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log('Dogs wang wang');
    }
}

var dog = new Dog("xiao huang");

dog.sayName();
dog.speak();