let person = {
    firstName: "Annie",
    age: 20,
    about: function () {
        console.log(this.firstName, this.age);
    }
};

person.about();