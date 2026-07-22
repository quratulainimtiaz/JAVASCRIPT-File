function createUser(name, age) {
    return {
        name,
        age,
        about() {
            console.log(this.name, this.age);
        }
    };
}

const user1 = createUser("Annie", 20);
user1.about();