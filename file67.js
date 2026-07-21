let users = [
    {name:"Ali", age:18},
    {name:"Sara", age:25}
];

let adults = users.filter(function(user){
    return user.age >= 20;
});

console.log(adults);