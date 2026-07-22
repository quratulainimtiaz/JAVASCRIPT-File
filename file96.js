function User(name) {
    this.name = name;
}

const user = new User("Annie");

console.log(user.hasOwnProperty("name"));