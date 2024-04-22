// import './App.css'
import Inicio from './componentes/Inicio'
import {Routes, Route, HashRouter} from "react-router-dom"
import NotFound from './componentes/NotFound'
import Registro from './componentes/Registro'

function App(){
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/'           element={<Inicio/>}/>
                <Route exact path='/Registro'   element={<Registro />}/>
                <Route exact path='*'           element={<NotFound />}/>
            </Routes>
        </HashRouter>
    )
}
export default App