// Callback Example

function calculate(a, b, callback) {
    callback(a, b);
}

function add(x, y) {
    console.log(x + y);
}

calculate(10, 20, add);