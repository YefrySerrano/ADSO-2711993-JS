const url= "https://jsonplaceholder.typicode.com/users";
const respuesta = document.querySelector("#respuesta");

document.addEventListener("DOMContentLoaded", llamarAPI);

    function llamarAPI(){
      fetch(url)
      .then(resp=>resp.json())
      .then((data)=> mostrarHTML(data))  
    }

    function mostrarHTML(datos){

        datos.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML =`
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.website}</td>
            `
            respuesta.appendChild(row)
            
        });
    }
