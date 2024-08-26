import React from 'react';
import "./barraRedes.css"

function BarraRedes(){
    return(
        <div className='container-bar'>
            <div className='icon-social'>
                <a href="." className='me-4 text-reset icon-facebook'><span id='title'>facebook</span> <i className='bi bi-facebook'></i></a>
                <a href="."  className='me-4 text-reset icon-twitter'><span id='title'>Twitter</span> <i className='bi bi-twitter'></i></a>
                <a href="mailto:jelm48@misena.edu.co"className='me-4 text-reset icon-google'><span id='title'>Google</span><i className='bi bi-google'></i></a>
                <a href="."  className='me-4 text-reset icon-linkedin'><span id='title'>LinkedIn</span> <i className='bi bi-linkedin'></i></a>
                <a href="."  className='me-4 text-reset icon-github'><span id='title'>Github</span> <i className='bi bi-github'></i></a>
                <a href="."  className='me-4 text-reset icon-pinterest'><span id='title'>Pinterest</span> <i className='bi bi-pinterest'></i></a>
                <a href="https://web.whatsapp.com/" className='me-4 text-reset icon-whatsapp'><span id='title'>whatsapp</span> <i className='bi bi-whatsapp'></i></a>
            </div>
        </div>
    )
}
export default BarraRedes