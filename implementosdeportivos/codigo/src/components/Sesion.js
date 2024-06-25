import React from 'react'
import CardList from './main/CardList';
import Footer from './footer/Footer';
import Carrusel from './carrusel/Carrusel';
import HeaderSesion from './headerSesion/HeaderSesion';
import SesionExpired from './sesionExpired/SesionExpired';
import Cookies from 'universal-cookie';

export default function Sesion() {
  const cookies = new Cookies()
  return (
    <div>
      <p>Bienvenido {cookies.get("names")} {cookies.get("lastname")}</p>
      <p>{cookies.get("email")}</p>
      <HeaderSesion/>
      <Carrusel/>
      <CardList/>
      <Footer/>
      <SesionExpired/>
    </div>
  )
}
