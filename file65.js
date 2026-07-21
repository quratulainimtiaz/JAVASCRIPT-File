let users = [
    {name: "Ali", age: 20},
    {name: "Sara", age: 22}
];

let names = users.map(function(user){
    return user.name;
});

console.log(names);