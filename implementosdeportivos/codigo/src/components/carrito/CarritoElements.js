import React, { useContext } from 'react';
import { dataContext } from "../context/DataContext";

function CarritoElements() {
    const {librosDelCarrito, setLibrosDelCarrito} = useContext(dataContext);

    const eliminarLibroDelCarrito = (e) => {
        const librosFiltrados = librosDelCarrito.filter((filtro) => filtro.id !== Number(e.currentTarget.id))
        setLibrosDelCarrito(librosFiltrados);
    }

    const cantidad = () => {
        setLibrosDelCarrito((actualeslibs) => {
            return actualeslibs.map((libs) => {
                const valor = document.getElementById(libs.id);
                return { ...libs, precioCarrito: libs.precio * valor.value, cantidad: valor.value };
            })
        })
    }

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    return librosDelCarrito.map((libs) => {
        return (
            <section className="h-100">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img src={libs.image} className="img-fluid rounded-3" alt="imagen"/>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{libs.title}</p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <input id={libs.id} min="1" name="quantity" value={libs.cantidad} type="number" className="form-control form-control-sm" onChange={cantidad}/>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">$ {formatoNumero(libs.precioCarrito)}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className="btn btn-danger" id={libs.id} onClick={eliminarLibroDelCarrito}><i className="bi bi-trash3-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    })
}

export default CarritoElements;