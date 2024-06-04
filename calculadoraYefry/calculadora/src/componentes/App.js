import Display from "./Display";
import PanelBotones from "./PanelBotones";
import { Component }  from "react";
import validarOperacion from "../Logica/validarOperacion";

class App extends Component{

  state = {
    total :null,
    siguiente : null,
    operador :null,
  }

  handleClick = nombreDeBoton => this.setState(validarOperacion(this.state, nombreDeBoton))
  render() {
    return (
      <div >
        <h1>Calculadora</h1>
        <Display value={this.state.siguiente||this.state.total|| "0"} />
        <PanelBotones clickHandle={this.handleClick}/>
      </div>
    );
  }
}

export default App;
