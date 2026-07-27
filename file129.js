// insertBefore

const parent = document.getElementById("parent");

const newItem = document.createElement("li");
newItem.textContent = "JavaScript";

parent.insertBefore(newItem, parent.firstElementChild);