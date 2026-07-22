let person = {
    name: "Annie",
    age: 20,
    info() {
        console.log(this.name);
    }
};

person.info();