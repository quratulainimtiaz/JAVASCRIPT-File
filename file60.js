function greet(name) {
    console.log("Hello " + name);
}

function myFunction(callback) {
    callback("Annie");
}

myFunction(greet);