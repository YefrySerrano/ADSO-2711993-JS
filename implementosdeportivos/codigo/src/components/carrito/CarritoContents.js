import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CarritoElements from './CarritoElements';
import { dataContext } from '../context/DataContext';
import Swal from 'sweetalert2';
import CarritoVacio from './CarritoVacio';


export default function CarritoContents() {
    const { librosDelCarrito, setLibrosDelCarrito } = useContext(dataContext);

    if (librosDelCarrito.length === 0) {
        return <CarritoVacio />
    }

    const vaciarCarrito = () => {
        Swal.fire({
            icon: 'question',
            title: '¿Esta seguro que desea vaciar el contenido del carrito de compras?',
            buttons: true,
            showCancelButton: true,
            showConfirmButton: true,
            dangerMode: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    setLibrosDelCarrito([]);
                    return;
                }
            })
    }

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    const precioTotalCarrito = librosDelCarrito.reduce((a, b) => a + b.precioCarrito, 0)

    return (
        <div class="h-100">
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black">Carro de compras</h3>
                            <button type='button' className='btn btn-warning btn-lg' onClick={vaciarCarrito}>Vaciar carrito <i className='bi bi-cart-x'></i></button>
                            <div>
                                <Link to='/'><h4 className='mb-0'><span className='text-muted'>Seguir comprando</span></h4></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <CarritoElements/>

                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">
                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between">
                                        <div className='col-3'><h4><span>Total a pagar:</span></h4></div>
                                        <div className='col-3'><h4> $ {formatoNumero(precioTotalCarrito)}</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">
                            <div class="row d-flex justify-content-between align-items-center">
                                <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}