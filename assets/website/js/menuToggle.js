console.log("Hello World");

const menuToggle = document.querySelector("nav .menu-toggle");
let menu = document.querySelector("nav .menu");
let phone = document.querySelector("nav .phone");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    phone.classList.toggle("show");
    menuToggle.classList.toggle("show");
});
console.log(menuToggle);