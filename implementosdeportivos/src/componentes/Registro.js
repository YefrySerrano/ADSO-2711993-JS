import React from 'react';
import Swal  from 'sweetalert2';
import {useState} from 'react';
import {useRef} from 'react';

// function Registro() {

//Validaciones del formulario 
export default function Registro() {
  //const [deptos Index, setDeptos Index] = useState(1);
  const [identificacionError, setIdentificacionError] = useState(false);
  const [nomError, setNomError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorVacio, setErrorEmailVacio] = useState(false);
  const [direccionError, setDireccionError] = useState(false);
  const [telefonoError, setTelefonoError] = useState(false);
  const [fechaNacimientoError, setFechaNacimientoError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false);
  const [passComparacion, setPassComparacion] = useState(false);

  const form = useRef();

  function idError() {
    //Esta función setea a false la variable "identificacionError" para que el mensaje de error desaparezca cuando hacen click en el campo de la identificación. 
    setIdentificacionError(false);
  }

  function nombreError() {
    //Esta función setea a false la variable "nomError" para que el mensaje de error desaparezca cuando hacen click en el campo del nombre.
    setNomError(false);
  }
  function apelliError() {
    setApellidoError(false);
  }
  function errorEmail() {
    setEmailError(false); //Para cuando no escriban una dirección de correo válida en su estructura.
    setErrorEmailVacio(false); //Para cuan do dejen vacío el campo email
  }

  function dirError() {
    setDireccionError(false);
  }
  function telError() {
    setTelefonoError(false);
  }
  function fechaNacimientoErrorFuncion() {
    setFechaNacimientoError(false);
  }

  function passError() {
    setPasswordError(false);
  }
  function passRepeat() {
    //setPasswordErrorRepeat (false)
    setPassComparacion(false);
    setPasswordErrorRepeat(false);
  }
  const [values, setValues] = useState({
    identificacion: "",
    nombres: "",
    apellidos: "",
    email: "",
    direccion: "",
    telefono: "",
    fechaNacimiento: "",
    password: "",
    passRepeat: "",
  });

  const handleChange = (e) => {
    //cuando se cambie de Input entonces se guarda la información en la variables.

    const { name, value } = e.target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };
  const handleSubmit = (e) => {
    ;
    e.preventDefault();
    let validPassword = /^(?=. *? [A-Z] ) (?=.*?[a-z]) (?=. *?[0-9]) (?=.*? [#? ! @$%^&* - ]).{8,}$/; //Expersión regular para: Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial. https://uibakery.io/regex-library/password 
    let validEmail = /^\w+([.-_+]?\w+) *@\w+( [ . -]?\w+)*(\ . \w{2,10})+$/; //Expresión regular para validar email, es decir, que el email ingresado tenga el formato correcto de una dirección de correo electrónico

    if (
      values.identificacion.length < 5 ||
      values.identificacion.length > 10 ||
      values.identificacion.length === 0
    ) {
      setIdentificacionError(true);
      return;
    } else if (values.nombres.length < 3 || values.nombres.length === 0) {
      //El método trim( ) elimina los espacios en blanco en ambos extremos del string. setNomError(true);
      return;
    } else if (values.apellidos.length < 3 || values.apellidos.length === 0) {
      setApellidoError(true);
      return;
    } else if (values.email.length === 0) {
      setErrorEmailVacio(true);
      return;

    } else if (!validEmail.test(values.email)) {
      setEmailError(true);
      return;
    } else if (values.direccion.length < 15) {
      setDireccionError(true);
      return;
    } else if (values.telefono.length < 10 || values.telefono.length > 10) {
      setTelefonoError(true);
      return;
    } else if (values.fechaNacimiento === "") {
      setFechaNacimientoError(true);
      return;

    } else if (!validPassword.test(values.password)) {
      setPasswordError(true);
      return;
    } else if (values.passRepeat.length === 0) {
      setPasswordErrorRepeat(true);
      return;

    } else if (values.password !== values.passRepeat) {
      setPassComparacion(true);
      return;
    }

    fetch("http://localhost:3001/registro-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 200) {
          //alert("Usuario creado con exito")
          Swal.fire({
            title: "Ususario creado con exito",
            icon: "success",
          });
          form.current.reset();
          window.location.hash = "/login";
        }
        if (response.status === 400) {
          //alert(" +reponse.status")
          Swal.fire({
            title:
              "No fue posible crear el usuario ya existe el correo ingresado " +
              values.email,
            icon: "warning",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "No fue posible finalizar el proceso dee registro por un error interno del servidor",
          icon: "error",
        })
      });

    ///hmtl
    return (

      <div className='contenedorP'>
        <h1 className='center'>
          REGISTRO DE USUARIO
        </h1 >
        <form onSubmit={handleSubmit} ref={form} >
          <div class="form-group">
            <label for="exampleInputEmail1">Numero de Identificacion</label>
            <input name='identificacion' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="identificacion" onChange={handleChange} onClick={idError}/>
            {identificacionError && <small className="text-danger"> oeeeeee </small>}

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Nombre</label>
            <input name='nombre' type="text" class="form-control" id="exampleInputPassword1" placeholder="Nombre" onChange={handleChange} onClick={}/>
            {identificacionError && <small className="text-danger"> oeeeeee </small>} />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Apellido</label>
            <input name='apellido' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido" />

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Correo</label>
            <input name='email' type="email" class="form-control" id="exampleInputPassword1" placeholder="Correo" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Direccion</label>
            <input name='direccion' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion" />

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Telefono</label>
            <input name='telefono' type="number" class="form-control" id="exampleInputPassword1" placeholder="Telefono" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Fecha de Nacimiento</label>
            <input name='fechaNacimiento' type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DD/MM/AA" />

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Pass Repeat</label>
            <input name='passRepeat' type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pass Repeat" />
          </div>

          <div className="center">
            <button type="submit" class="btn btn-primary center">Submit</button>
          </div>
        </form>
      </div>
    )

    ////////////////html 

    
  }
}
