function outer() {

    return function inner() {
        console.log("Hello World");
    };

}

const result = outer();

result();