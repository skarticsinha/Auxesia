const header = document.querySelector(".sticky");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("sticky_menu");
    }   else {
        header.classList.remove("sticky_menu");
    }
});

const mobile_nav = document.querySelector (".mobile_navbar_btn");
const nav_header = document.querySelector (".mobile_header");

const toggleNavbar = () => {
   nav_header.classList.toggle("menu_active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());
