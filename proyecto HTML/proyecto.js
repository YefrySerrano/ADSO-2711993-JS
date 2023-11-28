function agregarImg() {
   let contador = 1;
    while (contador<=20) {
    let imagen = `mascota${contador}.jpg`
    let contenedor = document.getElementById(`${contador}`)
    contenedor.insertAdjacentHTML("beforeend",`<img src=${imagen} alt=${imagen} class="imgBody" >`)
    contador++ 
    }
    
}