import React from "react";
import './header.css';
import {Link} from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {
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
                                    <a className="nav-link" href="#"><ShoppingCartIcon className='negro'/></a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Header