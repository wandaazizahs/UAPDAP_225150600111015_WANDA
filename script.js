const navSlide = () => {
    const menu = document.querySelector(".menu");
    const navLists = document.querySelector("nav");

    menu.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        menu.classList.toggle("toggle-menu")
    });
};

navSlide();