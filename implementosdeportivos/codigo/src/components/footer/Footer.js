import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start footer text-muted">
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                        <span>Conéctate con nosotros en redes sociales:</span>
                    </div>
                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="bi bi-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="bi bi-twitter-x"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>MangaWolf
                                </h6>
                                <p>Compañia vendedora de mangas para todos los gustos y colores. Enviamos tu manga a contraentrega sin compromiso.</p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">Productos</h6>
                                <p>
                                    <a href="#!" class="text-reset">Linea Mangas</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Linea Comics</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">Informacion</h6>
                                <p>
                                    <a href="#!" class="text-reset">Quienes Somos</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Pagos y Envios</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                                <p><i class="fas fa-home me-3"></i> Risaralda, Colombia </p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    angelofabianmoron05@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> +57 311 378 4303</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4" >
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}
