const menuBtn = document.querySelector(".menu-hamburguesa");
const nav = document.querySelector(".navegacion");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("activo");
    nav.classList.toggle("activo");
});


// =========================
// CERRAR MENÚ AL HACER CLICK
// =========================

const navLinks = document.querySelectorAll(".navegacion-principal a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("activo");
        menuBtn.classList.remove("activo");
    });
});


// =========================
// LINK ACTIVO SEGÚN SECTION
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("activo-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("activo-link");
        }
    });
});