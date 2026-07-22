function about(city) {
    console.log(this.name, city);
}

let user = {
    name: "Ali"
};

about.call(user, "Peshawar");