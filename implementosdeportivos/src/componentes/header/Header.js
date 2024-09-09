import React, { useEffect } from "react";
import './header.css';
import './magicMenu.css';
import { Link } from 'react-router-dom';
import logo from "./icon.png"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {
  useEffect(() => {

    const list = document.querySelectorAll(".list");

    function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));

  })

    return (
        <div className="contenedor border">
            <nav className="navbar navbar-expand-lg bg-primary border espacio">
                <div className="container-fluid ">
                        <img src={logo} className="sizeIcon" alt="icono" />
                    
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
                            <Link to='/registro'>
                                <li className="nav-item">
                                    <a className="nav-link text-white " aria-disabled="true" href="#">Registrarse</a>
                                </li>
                            </Link>
                            <Link to='/login'>
                                <li className="nav-item">
                                    <a className="nav-link text-white " aria-disabled="true" href="#" >Iniciar sesion </a>
                                </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 lista">
                            <Link to='/carrito-contents'>
                                <li className="nav-item itemLista">
                                    <a className="nav-link" href="#"><ShoppingCartIcon className='negro' /></a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div class="navigation"> {/* MAGIC NAVIGATION*/}
                        <ul>
                            <li class="list active">
                                <a href="#">
                                    <span class="icon">
                                        <ion-icon name="home-outline"></ion-icon>
                                    </span>
                                    <span class="text">Inicio</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="#">
                                    <span class="icon">
                                        <ion-icon name="person-outline"></ion-icon>
                                    </span>
                                    <span class="text">Profile</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="#">
                                    <span class="icon">
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                    </span>
                                    <span class="text">Message</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="#">
                                    <span class="icon">
                                        <ion-icon name="camera-outline"></ion-icon>
                                    </span>
                                    <span class="text">Photos</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="#">
                                    <span class="icon">
                                        <ion-icon name="settings-outline"></ion-icon>
                                    </span>
                                    <span class="text">Settings</span>
                                </a>
                            </li>
                            <div class="indicator"></div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}
export default Header