// import './App.css'
import Inicio from './componentes/Inicio'
import {Routes, Route, HashRouter} from "react-router-dom"
import NotFound from './componentes/NotFound'
import Registro from './componentes/Registro'
import Sesion from './componentes/Sesion'
import Login from './componentes/Login'

function App(){
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/'           element={<Inicio/>}/>
                <Route exact path='/registro'   element={<Registro />}/>
                <Route exact path='/login'      element={<Login />}/>
                <Route exact path='/sesion'      element={<Sesion />}/>
                <Route exact path='*'           element={<NotFound />}/>
            </Routes>
        </HashRouter>
    )
}
export default App