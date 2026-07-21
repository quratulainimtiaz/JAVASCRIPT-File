let products = [
    {name:"Phone", price:200},
    {name:"Laptop", price:500}
];

let total = products.reduce(function(sum, product){
    return sum + product.price;
},0);

console.log(total);