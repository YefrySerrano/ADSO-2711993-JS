import React from 'react'

export default function CarritoVacio() {
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">              
            </div>
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img src="carritoVacio.jpg" alt='carrito-vacio' width="1000" height="1000" className="img-fluid mb-4 mr-3" />
                <h3><strong>Su carrito esta Vacio</strong></h3>
                <h4>😃</h4>
                <a href="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">Continuar comprando</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}