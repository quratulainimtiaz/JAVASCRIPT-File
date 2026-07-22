const userMethods = {
    about() {
        console.log(this.name, this.age);
    }
};

function createUser(name, age) {
    const user = {};
    user.name = name;
    user.age = age;
    user.about = userMethods.about;
    return user;
}

const user1 = createUser("Sara", 21);
user1.about();