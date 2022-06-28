import React from 'react'
import Form from '../../css/formtipouso.module.css'

const body = (props) => {
    return (
        <div className={Form.body}>
            <form action="" className={Form.Form}>
                <div className={Form.formInput}>
                    <input type="text" name="tipo_uso" className={Form.input} placeholder="Nombre de la medicina" 
                    onChange={(e) => {
                        props.name(e.target.value)
                    }}
                    />
                </div>
                <div multiple className={Form.formInput}>
                    <select name="" id="" className={`${Form.input} ${Form.select}`}>
                        <option value="" disabled selected>ESTADO</option>
                        <option value="o">Inhabilitado</option>
                        <option value="1">Habilitado</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default body