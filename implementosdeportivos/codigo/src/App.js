import './App.css';
import Inicio from './components/Inicio';
import NotFound from './components/NotFound';
import Registro from './components/Registro';
import Login from './components/Login';
import Sesion from './components/Sesion';
import DataProvider from './components/context/DataContext';
import {Routes, Route, HashRouter} from "react-router-dom";
import CarritoVacio from './components/carrito/CarritoVacio';
import CarritoElements from './components/carrito/CarritoElements';
import CarritoContents from './components/carrito/CarritoContents';

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/registro" element={<Registro/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/sesion" element={<Sesion/>}/>
          <Route exact path="/carrito-vacio" element={<CarritoVacio/>}/>
          <Route exact path="/carrito-elements" element={<CarritoElements/>}/>
          <Route exact path="/carrito-contents" element={<CarritoContents/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
