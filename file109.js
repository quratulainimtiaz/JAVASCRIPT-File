// Closures Example 1

function greeting(name) {
    return function () {
        console.log("Hello " + name);
    };
}

const sayHello = greeting("Annie");
sayHello();