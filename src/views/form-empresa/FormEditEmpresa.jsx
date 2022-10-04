import React from "react";
import Navbar from '../../components/navegacion/Navbar'
import Style from '../../css/formEmpresa.module.css'

function FormEditEmpresa() {
    return(
        <div>
        <Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
            
                <h1 className={Style.text}>EDITAR LA EMPRESA </h1>
                <form action="" className={Style.formempresa}>
                    <input  className={Style.input} type="text" name='nombre_empresa' placeholder='Nombre de la empresa' />
                    <input  className={Style.input} type="text" name='direccion' placeholder='Direccion' />
                    <input  className={Style.input} type="text" name='id_producto' placeholder='Producto'/>
                    <input  className={Style.input} type="text" name='telefono' placeholder='Telefono' />
                    <input  className={Style.input} type="email" name='email' placeholder='Correo electronico' />
                    <input  className={Style.input} type="text" name='lote' placeholder='Lote' />
                    <select name="activo"  className={Style.select}>
                        <option value="" disabled selected>ESTADO</option>
                        <option value={1}>activo</option>
                        <option value={0}>inactivo</option>
                    </select>
                    <div className={Style.btn}>
                    <button type='submit' className={Style.button}> ENVIAR</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
    )   
}
export default FormEditEmpresa;