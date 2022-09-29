import React from 'react'
import Style from '../../css/moda.module.css'

const modal = ({ children, alert, setAlert }) => {
  return (
    <>
      {
        alert &&
        <div 
        className={Style.overlay}
        >
          <div 
          className={Style.contenedorModal}
          >
            <div className={Style.encabezadoModal}>
              <h3>TITULO</h3>
            </div>
            <button 
            className={Style.botonCerrar} 
            onClick={ () => {
              setAlert(!alert)
            }}
            >
              x
            </button>

            <div className={Style.children}>
              {children}
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default modal