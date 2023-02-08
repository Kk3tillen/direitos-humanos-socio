const nav = document.querySelector("nav");
let lastScrollY = 0;
const btnMenu = document.querySelector("#btnMenu");
let isMenuOpen = false;
const navLinks = document.querySelectorAll("nav a");

function isMobileOpen() {
    return nav.classList.contains("mobileOpen");
}

function updateTopPageStyle() {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY) {
        nav.classList.remove("topPage");
    } else if (!isMobileOpen()) {
        nav.classList.add("topPage");
    }
}

function toggleMenu() {
    if (!isMenuOpen) {
        nav.classList.add("mobileOpen");
        nav.classList.remove("topPage");
    } else {
        nav.classList.remove("mobileOpen");
    }

    updateTopPageStyle();
    isMenuOpen = !isMenuOpen;
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", toggleMenu);
});

window.addEventListener("scroll", updateTopPageStyle);
btnMenu.addEventListener("click", toggleMenu);