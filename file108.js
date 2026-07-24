// Scope Chain

let country = "Pakistan";

function outer() {
    let city = "Peshawar";

    function inner() {
        console.log(country);
        console.log(city);
    }

    inner();
}

outer();