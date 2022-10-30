const header = document.querySelector(".sticky");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("sticky_menu");
    }   else {
        header.classList.remove("sticky_menu");
    }
});

