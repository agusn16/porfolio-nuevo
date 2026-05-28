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

/* =========================
   PRECARGA
========================= */

window.addEventListener("load", () => { // Espera a que la página se cargue completamente

    const preloader = document.getElementById("prerecarga"); // Selecciona el elemento del preloader

    setTimeout(() => { // Agrega una pequeña demora para mostrar el preloader

        preloader.classList.add("ocultar"); // Agrega la clase "ocultar" para iniciar la animación de ocultar el preloader

        preloader.addEventListener("transitionend", () => { // Escucha el evento de finalización de la transición
            preloader.style.display = "none"; // Oculta completamente el preloader después de la animación
        });
    }, 1100); // Ajusta el tiempo de demora según la duración de tu animación de preloader
});

/* =========================
   SONIDO AL HACER CLICK
========================= */

const sonido = new Audio("sounds/minimalistaclick.mp3"); // Asegúrate de que la ruta al archivo de sonido sea correcta
const boton = document.getElementById("boton-menu"); // Asegúrate de que el ID del botón sea correcto

if(boton) {
    
    sonido.volume = 0.1; // Ajusta el volumen según tus preferencias (0.0 a 1.0)

    boton.addEventListener("click", () => { // Agrega un evento de clic al botón

        sonido.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el principio cada vez que se haga clic
        sonido.play(); // Reproduce el sonido al hacer clic en el botón
    
    });

}

const botonScroll = document.querySelector(".Desplazamiento"); // Asegúrate de que el selector coincida con el botón que deseas usar para el sonido al hacer scroll

botonScroll.addEventListener("click", () => { 

    sonido.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el principio cada vez que se haga clic
    sonido.play(); // Reproduce el sonido al hacer clic en el botón de desplazamiento
 
});

const botonSmoothScroll = document.querySelector(".button.stroke.smoothscroll"); // Asegúrate de que el selector coincida con el botón que deseas usar para el sonido al hacer scroll

botonSmoothScroll.addEventListener("click", () => { 

    sonido.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el principio cada vez que se haga clic
    sonido.play(); // Reproduce el sonido al hacer clic en el botón de desplazamiento
 
});

const buttonprimary = document.querySelector(".button.button-primary"); // Asegúrate de que el selector coincida con el botón que deseas usar para el sonido al hacer scroll

buttonprimary.addEventListener("click", () => {
    sonido.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el principio cada vez que se haga clic
    sonido.play(); // Reproduce el sonido al hacer clic en el botón de desplazamiento
 
});