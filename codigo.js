
// Selecciones para Barra de navegación hamburguesa
const menuHamburguesa = document.getElementById('menu-hamburguesa');
const navegacion =  document.getElementById ('navegacion');

menuHamburguesa.addEventListener ('click', () => {

  navegacion.classList.toggle('mostrar'); // Alterna la clase activar
});

const botonIdioma = document.getElementById("cambiar-idioma");

botonIdioma.addEventListener("click", () => {
  const idiomaActual = botonIdioma.textContent.trim(); // "EN" o "ES"
  const nuevoIdioma = idiomaActual === "EN" ? "en" : "es";
  const siguienteEtiqueta = idiomaActual === "EN" ? "ES" : "EN";

  // Cambiar texto del botón
  botonIdioma.textContent = siguienteEtiqueta;

  // Mostrar los textos en el nuevo idioma y ocultar los otros
  document.querySelectorAll("[data-lang]").forEach(el => {
    const lang = el.getAttribute("data-lang");
    el.style.display = lang === nuevoIdioma ? "block" : "none";
  });
});
