import React from 'react'
import Form from '../../css/formtipouso.module.css'

const body = () => {
    return (
        <div className={Form.body}>
            <form action="" className={Form.Form}>
                <div className={Form.formInput}>
                    <input type="text" className={Form.input} placeholder="Nombre de la medicina" />
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