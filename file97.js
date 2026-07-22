class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(this.name, this.age);
    }
}

const p1 = new Person("Ali", 20);
p1.info();