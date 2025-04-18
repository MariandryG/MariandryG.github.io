// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Selecciones para Barra de navegación hamburguesa
const menuHamburguesa = document.getElementById('menu-hamburguesa');
const navegacion =  document.getElementById ('navegacion');

menuHamburguesa.addEventListener ('click', () => {

  navegacion.classList.toggle('activar'); // Alterna la clase activar
});

