class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

const d1 = new Dog("Tommy");
console.log(d1.name);