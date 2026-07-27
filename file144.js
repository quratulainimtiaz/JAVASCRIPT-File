// Event Capturing

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function () {
    console.log("Parent Capturing");
}, true);

child.addEventListener("click", function () {
    console.log("Child Clicked");
});