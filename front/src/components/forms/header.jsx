import React from 'react'
import Form from '../../css/formtipouso.module.css'

const header = (props) => {
    
    return (
        <div className={Form.textoUso}>
            <h1>{props.form}Tipo de Uso</h1>
        </div>
    )
}

export default header