import React from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Style from './form.module.css'

const form = () => {
  return (

    <div className={Style.container}>
        < Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
                <h1 className={Style.text}>Registrar Empresa</h1>
                <form action="" className={Style.formBusiness}>
                    <input className={Style.input} type="text" value="" placeholder='Nombre Empresa' />
                    <input className={Style.input} type="text" value="" placeholder='Dirección' />
                    <input className={Style.input} type="text" value="" placeholder='Producto' />
                    <input className={Style.input} type="text" value="" placeholder='Telefono' />
                    <input className={Style.input} type="text" value="" placeholder='Correo' />
                    <select name="" id="" className={Style.select}>
                        <option value="" disabled selected>Estado</option>
                        <option value="1">Activo</option>
                        <option value="0">Inhactivo</option>
                    </select>
                    <div className={Style.btn}>
                        <button className={Style.button}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default form