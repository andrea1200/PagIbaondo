const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click",  () => {
    nav.classList.remove("visible");
})
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}
