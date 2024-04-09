import React from 'react'

function Registro() {
  return (
    
    <div className='contenedorP'>
      <h1 className='center'>
        REGISTRO DE USUARIO
      </h1 >
      <form className='formulario'>
        <div class="form-group">
          <label for="exampleInputEmail1">Numero de Identificacion</label>
          <input name='identificacion' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="identificacion"/>
           
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Nombre</label>
          <input name='nombre' type="text" class="form-control" id="exampleInputPassword1" placeholder="Nombre"/>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Apellido</label>
          <input name='apellido' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido"/>
           
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Correo</label>
          <input name='email' type="email" class="form-control" id="exampleInputPassword1" placeholder="Correo"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Direccion</label>
          <input name='direccion' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion"/>
           
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Telefono</label>
          <input name='telefono' type="number" class="form-control" id="exampleInputPassword1" placeholder="Telefono"/>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Fecha de Nacimiento</label>
          <input name='fechaNacimiento' type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DD/MM/AA"/>
           
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Pass Repeat</label>
          <input name='passRepeat' type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pass Repeat"/>
        </div>
        
        <div className="center">
          <button type="submit" class="btn btn-primary center">Submit</button>
          </div>  
      </form>
    </div>
  )
}

export default Registro
