import React from 'react';
import Header from "./header/Header";
import CardList from './main/CardList';
import Footer from './footer/Footer';
import Carrusel from './carrusel/Carrusel';

function Inicio() {
    return (
      <div>
        <Header/>
        <Carrusel/>
        <CardList/>
        <Footer/>
      </div>
    );
}
  
export default Inicio;