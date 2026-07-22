function greet() {
    console.log("Hello", this.name);
}

let user = {
    name: "Sara"
};

let fun = greet.bind(user);
fun();