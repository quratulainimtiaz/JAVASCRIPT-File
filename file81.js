let obj1 = {
    name: "Ali",
    age: 20
};

let obj2 = Object.assign({}, obj1);

obj2.city = "Peshawar";

console.log(obj1);
console.log(obj2);