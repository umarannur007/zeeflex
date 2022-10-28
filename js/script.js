const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector("nav");

navMenu.addEventListener("click", () => {
    nav.classList.add("nav-open")
})

navClose.addEventListener("click", () => {
    nav.classList.remove("nav-open")
})