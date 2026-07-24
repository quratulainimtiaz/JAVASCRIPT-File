// querySelectorAll & getElementsByClassName

const headings = document.querySelectorAll(".heading");

headings.forEach((item) => {
    console.log(item.textContent);
});

const headingClass = document.getElementsByClassName("heading");

console.log(headingClass.length);