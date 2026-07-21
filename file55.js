const value = "outer";

function myApp() {

    function myFunc() {
        console.log(value);
    }

    myFunc();
}

myApp();