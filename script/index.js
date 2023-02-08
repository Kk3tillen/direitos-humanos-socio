const nav = document.querySelector("nav");
let lastScrollY = 0;
const btnMenu = document.querySelector("#btnMenu");
let isMenuOpen = false;

function isMenuMobileShow() {
    return btnMenu.style.display === "none"
}

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY == lastScrollY) {
        nav.classList.add("topPage")
    } else {
        nav.classList.remove("topPage");
    }
});

btnMenu.addEventListener("click", () => {
    if (!isMenuOpen) {
        btnMenu.classList.add("open");
    } else {
        btnMenu.classList.remove("open");
    }

    isMenuOpen = !isMenuOpen;
});