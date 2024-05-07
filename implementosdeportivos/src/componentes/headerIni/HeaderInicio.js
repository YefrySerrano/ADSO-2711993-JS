import React from "react";
import './headerInicio.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';



function Header() {

    const handleClickCerrarSesion = (e) => {
        e.preventDefault(); // Evitar que el enlace redirija inmediatamente
    
        // Mostrar el SweetAlert al hacer click en el enlace
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Estás a punto de cerrar sesión. ¿Deseas continuar?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, cerrar sesión',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirigir a la página de Login si se confirma la acción
            window.location.href = '/login'; // Cambia esto por tu lógica de redirección
          }
        });
      };


    return (
        <div className="contenedor border">
            <nav className="navbar navbar-expand-lg bg-primary border ">
                <div className="container-fluid">
                    <img src="icon.png" className="logo" alt="icono" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="#">Tennis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " aria-disabled="true" href="#">Balones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " aria-disabled="true" href="#">Camisas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " aria-disabled="true" href="#">Pantalonetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " aria-disabled="true" href="#">Otros</a>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " aria-disabled="true" href="#" onClick={handleClickCerrarSesion}>Cerrar Sesion</a>
                                </li>                            
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Header