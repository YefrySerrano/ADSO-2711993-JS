import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect, useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import GroupIcon from '@mui/icons-material/Group';
import Header from './header/Header';
import Footer from './footer/Footer';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import GoogleOAuth from './googleOAuth/GoogleOAuth.js';
// import FireBaseAuth from './FireBase/FireBaseAuth';
// import GoogleOAuth from './google-oauth/GoogleOAuth';

const Login = () => {
    const cookies = new Cookies();
    const [errorEmail,setErrrorEmail] = useState(false);
    const [errorPassword, setErrrorPassword] = useState(false);
    // const [userName,setUserName] = useState("");
    const [showPassWord, setShowPassWord] = useState(true);

    const [values, setValues] = useState({
        rol: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }

    const handleClickPassWord = (e) => {
        setErrrorPassword(false)

    }

    const handleClickEmail = (e) => {
        setErrrorEmail(false)

    }

    const handleShowPassword = (e) => {
        setShowPassWord(!showPassWord)

    }

    const iniciarSesion = (e) => {
        e.preventDefault()
        let select = document.getElementById("exampleFormControlSelect1");// capturamos el valor seleccionado en el select
        values.rol = select.value // guardamos en el arreglo "values" el rol seleccionado por medio del select

        if (values.password.length === 0 && values.email.length === 0) {
            setErrrorEmail(true)
            setErrrorPassword(true)
            return
        }

        if (values.password.length === 0) {
            setErrrorPassword(true)
            return
        }
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "Application/json", "Accept": "application/json" },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(res => {
            console.log("res-->> ", res)
            if (res.title === "error") {
                Swal.fire({
                    title: "Las credenciales ingresadas no son correctas",
                    icon: "error"
                })
                window.location.hash = '/login'
                return
            } else {
                cookies.set('email', res.email, {
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                cookies.set('nombres', res.nombres, {
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                cookies.set('apellidos', res.apellidos, {
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
                title: "No se puede iniciar sesiion por un problema en el servidor",
                icon: "error"
            }),
                window.location.hash = '/login'
            )
    }

    
    useEffect(() => {
        if (cookies.get('email')) {
            window.location.hash = '/login'
        }
    })

    
    return (
        <div>
            
            <form onSubmit={iniciarSesion}>
                <section className='vh-100 bg.primary'>
                    <div className='container py-5 h-100'>
                        <div className=' row d-flex justify-content-center align-items-center h-100'>
                            <div className='col-12 col-md8 col-log-6 col-xl-5'>
                                <div className='card shadow-2-strong rounded'>
                                    <div className='card-body p-5 text-center'>
                                        <h3 className='mb-5'>Sign in</h3>

                                        <div className='form-group mb-4'>
                                            <div className='text-start'><label for="exampleFormControlSelect1">Rol</label>
                                            </div>
                                            <div className='input-group mb-3'>
                                                <select className='form-control' id='exampleFormControlSelect1' name='rol'>
                                                    <option>Administrador</option>
                                                    <option>Usuario</option>
                                                </select>
                                                <div className='input-group-append'>
                                                   <span className='input-group-text' id='basic-addon2'><GroupIcon/></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='form-outline mb-4'>
                                            <div className='text-start'>
                                                <label className='form-label' for='typeEmailX-2'>Email</label>
                                            </div>
                                            <div className='input-group mb-3'>
                                                <input type='text' className='form-control' aria-label="Recipent's username" aria-describedby='basic-addon2' name='email' onChange={handleChange} onClick={handleClickEmail}></input>
                                                <div className='input-group-append'>
                                                    <span className='input-group-text' id='basic-addon2'><AlternateEmailIcon /></span>
                                                </div>
                                            </div>
                                            <span className='text-start'>{errorEmail ? <p>Debe ingresar un email</p> : ""}</span>
                                        </div>

                                        <div className='form-outline mb-4'>
                                            <div className='text-start'>
                                                <label className='form-label' for='typeEmailX-2'>Password</label>
                                            </div>
                                            <div className='input-group mb-3'>
                                                <input type={showPassWord ? "password" : "text"} className='form-control' aria-label="Recipient's username" aria-describedby='basic-addon2' name='password' onChange={handleChange} onClick={handleClickPassWord}></input>
                                                <div className='input-group.append'>
                                                    <span className='input-group-text' id='basic-addon2'> <PasswordIcon onClick={handleShowPassword}></PasswordIcon></span>
                                                </div>
                                            </div>
                                            <span className='text-start'>{errorPassword ? <p>Debe ingresar una contraseña</p>:""}</span>
                                        </div>
                                     
            
                                        <div className='d-grid gap-2 col-15 mx-auto'>
                                            <button className='btn btn-primary btn-lg btn-block' type="submit">Login</button>
                                        </div>

                                        <hr className='my-20'/>{/* cre una linea horizontal*/}
                                        <GoogleOAuth/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <Footer/>
        </div>
    );
}

export default Login