const burger = document.getElementById("burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    header.classList.toggle("active");
    nav.classList.toggle("active");
})