const caja = document.querySelector("#caja");
const texto = document.querySelector("#texto");


caja.addEventListener("click", cambiarColor);

function cambiarColor(){
    caja.classList.toggle("bg-primary");
    caja.classList.toggle("bg-dark");
    texto.classList.toggle("text-warning");
    texto.classList.toggle("text-white");



}