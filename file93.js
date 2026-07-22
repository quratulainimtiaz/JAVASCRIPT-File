function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const p1 = new Person("Annie");
p1.sayHello();