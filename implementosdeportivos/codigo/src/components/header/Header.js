import React from 'react'
import "./header.css"
import HomeIcon from '@mui/icons-material/Home';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SubjectIcon from '@mui/icons-material/Subject';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.png' alt='logo' className='logo'/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 lista">
                            <li className="nav-item itemLista">
                                <HomeIcon className='negro'/>
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item itemLista">
                                <PlayArrowIcon className='negro'/>
                                <a className="nav-link" href="#">Tutoriales</a>
                            </li>
                            <li className="nav-item itemLista">
                                <SubjectIcon className='negro'/>
                                <a className="nav-link" href="#">Referencias</a>
                            </li>
                            <li className="nav-item itemLista">
                                <CreateNewFolderIcon className='negro'/>
                                <a className="nav-link" href="#">Recursos</a>
                            </li>
                            <li className="nav-item itemLista">
                                <LocalPhoneIcon className='negro'/>
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <Link to='/registro'>
                                <li className="nav-item itemLista">
                                    <PersonAddAlt1Icon className='negro'/>
                                    <a className="nav-link" href="#">Registrarse</a>
                                </li>
                            </Link>
                            <Link to='/login'>
                                <li className="nav-item itemLista">
                                    <LoginIcon className='negro'/>
                                    <a className="nav-link" href="#">Iniciar sesión</a>
                                </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Buscar</button>
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
