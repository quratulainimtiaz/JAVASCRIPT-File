// this Keyword in Event Listener

const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = "green";
});