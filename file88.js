const person = {
    name: "Annie",
    age: 20,
    about: function () {
        const show = () => {
            console.log(this.name, this.age);
        };
        show();
    }
};

person.about();