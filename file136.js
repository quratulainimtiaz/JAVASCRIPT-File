// Click Event on Multiple Buttons

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log("Button Clicked");
    });
});