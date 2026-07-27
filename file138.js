// Events Behind the Scenes

const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("First Event");
});

button.addEventListener("click", function () {
    console.log("Second Event");
});