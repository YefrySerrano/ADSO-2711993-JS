import React, { useContext } from 'react'
import './card.css'
import { dataContext } from '../context/DataContext'
export default function Cards(props) {
    const { setLibrosDelCarrito } = useContext(dataContext);

    function addToCart(){
        console.log(setLibrosDelCarrito);
        setLibrosDelCarrito((currentLibros) => {
            const isItemFound = currentLibros.find((item) => item.id === props.items.id);
            console.log("isItemFound---->>", isItemFound);
            if(isItemFound) {
                return currentLibros.map((item) => {
                    if(item.id === props.items.id) {
                        return { ...item, cantidad: Number(item.cantidad)+1, precioCarrito: item.precioCarrito + item.precio};
                    }
                    else{
                        return item;
                    }
                })
            }else{
                return [...currentLibros, props.items];
            }
        })
    }
    return (
        <div className="card2">
            <img src={props.items.image} alt='logo'/>
            <div>
                <h5>
                    {props.items.title}
                </h5>
                <p>
                    {props.items.descripcion}
                </p>
                <p>
                    {props.items.precio}
                </p>
                <button type="button" class="btn btn-outline-primary" onClick={addToCart}>
                    Comprar
                </button>
            </div>

        </div>
    )
}