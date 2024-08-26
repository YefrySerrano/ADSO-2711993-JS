// import './App.css'
import Inicio from './componentes/Inicio'
import {Routes, Route, HashRouter} from "react-router-dom"
import NotFound from './componentes/NotFound'
import Registro from './componentes/Registro'
import Sesion from './componentes/Sesion'
import Login from './componentes/Login'
import DataProvider from './componentes/context/DataContext';
import CarritoVacio from './componentes/carrito/CarritoVacio';
import CarritoElements from './componentes/carrito/CarritoElements';
import CarritoContents from './componentes/carrito/CarritoContents';

function App(){
    return(
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
    )
}
export default App