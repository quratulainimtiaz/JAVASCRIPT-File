// Event Delegation

const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});