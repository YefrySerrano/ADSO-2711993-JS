import React from 'react';
// import './App.css';
import HeaderInicio from './headerIni/HeaderInicio';
import CardList from './body/CardList';
import Carrusel from './carrusel/Carrusel';
import Cookies from 'universal-cookie';
import SesionExpired from './sesionExpired/SesionExpired';

function Sesion() {
  const cookies = new Cookies()
  return ( 
    <div className="App">
      <p>Bienvenido {cookies.get("nombres")} {cookies.get("apellidos")}</p>
      <p>{cookies.get("email")}</p>
      <HeaderInicio/>
      <Carrusel/>
      <CardList/>
      <SesionExpired/>

    </div>
  );
}

export default Sesion;