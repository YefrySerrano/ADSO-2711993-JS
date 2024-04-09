import React from "react"
import './card.css'
export default function Cards(props) {
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
                <button class="btn btn-outline-info">
                    Comprar
                </button>
            </div>

        </div>
    )
}