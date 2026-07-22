const userMethods = {
    about() {
        console.log(this.name);
    }
};

const user = Object.create(userMethods);
user.name = "Ali";

user.about();