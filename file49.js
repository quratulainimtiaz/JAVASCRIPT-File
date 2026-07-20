let users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 }
];

let [{ name }, { age }] = users;

console.log(name, age);