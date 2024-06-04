import Big from "big.js";

export default function validarOperacion(numero1, numero2,operador) {
    const uno = Big(numero1 || "0")
    const dos = Big(numero2 || (operador === "/" || operador === "x" ? "1" : "0"));

    if(operador === "+") return uno.plus(dos).toString()
    if(operador === "-") return uno.minus(dos).toString()
    if(operador === "x") return uno.times(dos).toString()
    if(operador === "/") return uno.div(dos).toString()
}
