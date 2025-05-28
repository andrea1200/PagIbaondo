const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click",  () => {
    nav.classList.remove("visible");
})
document.addEventListener("click", (event) => {
   const esClickDentroDelMenu = nav.contains(event.target);
   const esClickEnAbrir = abrir.contains(event.target);
 
   if (nav.classList.contains("visible") && !esClickDentroDelMenu && !esClickEnAbrir) {
     nav.classList.remove("visible");
   }
 });

