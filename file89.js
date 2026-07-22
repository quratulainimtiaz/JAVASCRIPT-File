const person = {
    name: "Ali",
    age: 22,
    about() {
        console.log(this.name, this.age);
    }
};

person.about();