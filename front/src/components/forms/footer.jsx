import React from 'react'
import Form from '../../css/formtipouso.module.css'

const footer = (props) => {
    return (
        <div className={Form.botones}>
            <button type="" onClick={props.btn} name="guardar" className={Form.buton1}>GUARDAR</button>
            <button type="" name="eliminar" className={Form.buton2}>ELIMINAR</button>
        </div>
    )
}

export default footer