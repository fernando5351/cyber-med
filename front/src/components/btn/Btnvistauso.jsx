import React from 'react'
import Btnview from '../../css/vistauso.module.css'
import med from '../../img/login/medicines.jpg'

function Btnvistauso() {
  return (
        <div class={Btnview.contenedorPro} >
            <div class={Btnview.subcontenedorPro}>
                <div class={Btnview.card}>
                  <div class={Btnview.cardContent}>
                      <img 
                       className={Btnview.imgPro}
                       src={med} 
                       alt='' />
                  </div>
                  <div className={Btnview.contentBtn}>
                      <a className={Btnview.btnVerM} href='#'>
                        VER MÁS
                      </a>
                  </div>
                </div>
            </div>                  
        </div>  
  )
}
export default Btnvistauso;