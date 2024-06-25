import React from 'react'
import Header from "./header/Header.js";
import Footer from './footer/Footer.js';
import './login/login.css';
import { useState } from 'react';
//import { useRef } from 'react';
import { useEffect } from 'react';
import Swal  from 'sweetalert2';
import Cookies from 'universal-cookie';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleOAuth from './googleOAuth/GoogleOAuth.js';

export default function Login() {
  const cookies = new Cookies();
  const [errorEmail, seterrorEmail] = useState(false);
  const [errorPassword, seterrorPassword] = useState(false);
  const [showPassword, setshowPassword] = useState(true);

  const [values, setValues] = useState({
    rol: "",
    email: "",
    password: "",
  })
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    const newValues = {
      ...values,
      [name]: value,
    }
    setValues(newValues);
  }

  const handleClickPassword = (e) => {
    seterrorPassword(false);
  }
  const handleClickEmail = (e) => {
    seterrorEmail(false);
  }
  const HandleShowPassword = (e) => {
    setshowPassword(!showPassword);
  }

  const IniciarSesion = (e) => {
    e.preventDefault();
    let select = document.getElementById('exampleFormControlSelect1');
    values.rol = select.value;
    
    if(values.email.length === 0 && values.password.length === 0){
      seterrorEmail(true);
      seterrorPassword(true);
      return;
    }
    if(values.email.length === 0){
      seterrorEmail(true);
      return;
    }
    if(values.password.length === 0){
      seterrorPassword(true);
      return;
    }

    fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {"Content-Type": "Application/json", "Acept":"application/json"},
      body: JSON.stringify(values),
    })
    .then(response => response.json())
    .then(res => {
      console.log("res-->> ", res)
      if(res.title === "error"){
        Swal.fire({
          title: "Las credenciales ingresadas no son correctas",
          icon: "error",
        })
        window.location.hash = '/login'
        return
      }else{
        cookies.set('email', res.email, {
          secure: true,
          sameSite: 'None',
          path: '/'
        })
        cookies.set('names', res.names, {
          secure: true,
          sameSite: 'None',
          path: '/'
        })
        cookies.set('lastname', res.lastname, {
          secure: true,
          sameSite: 'None',
          path: '/'
        })

        if(values.rol === "Usuario"){
          window.location.hash = '/sesion'
        }else{
          window.location.hash = '/usuarios-registrados'
        }
      }
    })
    .catch(() => Swal.fire({
      title: "No se puede iniciar sesion por un problema en el servidor",
      icon: "error",
    }),
      window.location.hash = '/login'
    )
  }

  useEffect(() => {
    if(cookies.get('email')){
      window.location.hash = '/login'
    }
  })

  return (
    <div>
      <Header/>
      <div className='bigcont'>
        <div className='cont'>
          <div className="titulo">
            <h2>Iniciar Sesion</h2>
          </div>
          <br></br>
          <form onSubmit={IniciarSesion}>
            <label for="exampleInputEmail1">Rol</label>
            <select className='form-control' id="exampleFormControlSelect1" name="rol">
              <option>Administrador</option>
              <option>Usuario</option>
            </select>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Correo Electronico</label>
              <input id="email" type="email" class="form-control" aria-describedby="emailHelp" name='email' onChange={handleChange} onClick={handleClickEmail}></input>
              {errorEmail ? <p className='error'>Debe ingresar una direccion de email valida.</p> : ""}
            </div>
            <br></br>
            
            <div className='form-outline mb-4'>
              <div className='text-start'>
                <label className="form-label" for="typeEmailX-2">Contraseña</label>
              </div>
              <div class="input-group mb-3">
                <input type={showPassword ? "password" : "text"} class="form-control" aria-label="Recipient's username" aria-describedby='basic-addon2' name="password" onChange={handleChange} onClick={handleClickPassword}></input>
                <div className='input-group-append'>
                  <span class="input-group-text" id="basic-addon2"><VisibilityIcon onClick={HandleShowPassword}/></span>
                </div>
              </div>
              <span className='text-start'>{errorPassword ? <p className='error'>Debe ingresar una contraseña</p> : ""}</span>
            </div>
            <br></br>

            <div className='btncont'>
              <button type="submit" class="btn btn-primary" id="boton">Iniciar Sesion</button>
            </div>
            <br></br>

            <div className='btnGoogle'>
              <GoogleOAuth/>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
