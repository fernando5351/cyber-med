import React from 'react'
import '../../css/btnvistauso.css'
import med from '../../img/login/medicines.jpg'

function Btnvistauso() {
  return (
        <div class='contenedor-productos' >
            <div class='subcontenedor-productos'>
                <div class='card'>
                  <div class='card-content'>
                      <img 
                       className='img-producto'
                       src={med} 
                       alt='' />
                  </div>
                  <div class='card-action' id='content-btnver'>
                      <a id='btn-vermas' href='#'>VER MAS</a>
                  </div>
                </div>
            </div>                  
        </div>  
  )
}
export default Btnvistauso;