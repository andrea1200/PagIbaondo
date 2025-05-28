const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");

// Mostrar el menú
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

// Ocultar si se hace clic fuera del menú
document.addEventListener("click", (event) => {
  const esClickDentroDelMenu = nav.contains(event.target);
  const esClickEnAbrir = abrir.contains(event.target);

  if (nav.classList.contains("visible") && !esClickDentroDelMenu && !esClickEnAbrir) {
    nav.classList.remove("visible");
  }
});
