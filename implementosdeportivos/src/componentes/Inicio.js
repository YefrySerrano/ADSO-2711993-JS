import React from 'react';
// import './App.css';
import Header from './header/Header';
import CardList from './body/CardList';
import Carrusel from './carrusel/Carrusel';

function Inicio() {
  return (
    <div className="App">
      <Header/>
      <Carrusel/>
      <CardList/>
      
    </div>
  );
}

export default Inicio;
