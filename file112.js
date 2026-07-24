// Closures Example 4

function message(msg) {
    return function () {
        console.log(msg);
    };
}

const show = message("JavaScript Closures");

show();