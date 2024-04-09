//Variables
const formulario = document.querySelector("#formulario")
const tituloFormulario = document.querySelector("#tituloFormulario")
const task = document.querySelector(".tareas")
const noHayTareas = document.querySelector("#nohayTareas")
let tareas = []

formulario.addEventListener("submit", validarFormulario)
task.addEventListener("click", eliminarTarea)
task.addEventListener("click", tareaCompletada)

function validarFormulario(e) {
    e.preventDefault()
    //validar datos
    const tarea = document.querySelector("#tarea").value
    if (!tarea.trim()) {
        tituloFormulario.textContent ="Formulario Vacio"
        setTimeout(() => {
            tituloFormulario.textContent = "Formulario"
        },2000)
        return
    }
    
    const objTarea = {
        id: Date.now(),
        tarea: tarea,
        estado :false
    }
    tareas = [...tareas,objTarea]
    formulario.reset()
    mostrarHtml()

}

function mostrarHtml() {
    task.innerHTML = ""
    if(tareas.length === 0){
        const mensaje =document.createElement("h2")
        mensaje.textContent = "No hay tareas"
        return
    }
    else{
        tareas.forEach((item) => {
            const itemTareas = document.createElement("div")
            itemTareas.classList.add("itemTarea")
            itemTareas.innerHTML = `
            ${item.estado ? (`<p class="completa">${item.tarea}</p>`) : (`<p> ${item.tarea}<p/>`)}
            <div class="botones">
                <button data-id="${item.id}" class = "eliminar">X</button>
                <button data-id="${item.id}" class = "completada">O</button>
            </div>
            `
            task.appendChild(itemTareas)       
        })
    }
    
}

function eliminarTarea(e){
    if(e.target.classList.contains("eliminar")){
        const tareaId = Number(e.target.getAttribute("data-id"))
        //Eliminado tarea
        const newTask = tareas.filter((item) => item.id !== tareaId)
        tareas = newTask
        mostrarHtml()

    }
}

function tareaCompletada(e) {
    if(e.target.classList.contains("completada")){
        const tareaId = Number(e.target.getAttribute("data-id"))
        //Completando tarea
        const newTask = tareas.map((item)=> {
            if (item.id === tareaId){
                item.estado = !item.estado
                return
            }
            else{
                return item
            }
        })

        mostrarHtml()
    }
    
}

