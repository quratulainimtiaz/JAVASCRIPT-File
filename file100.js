class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

const p1 = new Person("Annie");
console.log(p1.name);

p1.name = "Sara";
console.log(p1.name);