// replaceChild

const parent = document.getElementById("parent");

const newItem = document.createElement("li");
newItem.textContent = "React";

parent.replaceChild(newItem, parent.children[0]);