// Practice with Click Events

const heading = document.getElementById("heading");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    heading.textContent = "Welcome Annie";
});