const botonMenu = document.querySelector(".menu-hamburguesa"); // Selecciona el botón del menú hamburguesa
const menu = document.querySelector(".navegacion"); // Selecciona el menú de navegación

botonMenu.addEventListener("click", () => { // Agrega un evento de clic al botón del menú
    botonMenu.classList.toggle("activo"); // Alterna la clase "activo" en el botón del menú para animar las líneas
    menu.classList.toggle("activo"); // Alterna la clase "activo" en el menú para mostrar u ocultar el menú desplegable
});