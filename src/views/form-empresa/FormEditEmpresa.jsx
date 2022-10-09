import React, { useContext, useEffect, useState } from "react";
import Navbar from '../../components/navegacion/Navbar'
import Style from '../../css/formEmpresa.module.css'
import { ProductContextEmpresa } from "./arbol_info/ProductContextprovider"

function FormEditEmpresa() {
    const { updateProduct } = useContext(ProductContextEmpresa)

    const initialData = {
        nombre_empresa: "",
        id_producto: "",
        direccion: "",
        telefono: "",
        email: "",
        lote: "",
        activo: "",
      };
    const [empresaEdit, setEmpresaEdit] = useState(initialData)
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("empresa"))
      if(data) setEmpresaEdit(data)
    }, [])
    
    return(
        <div>
        <Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
            
                <h1 className={Style.text}>EDITAR LA EMPRESA </h1>
                <form action="" className={Style.formempresa}>
                    <input  className={Style.input} type="text" name='nombre_empresa' placeholder='Nombre de la empresa' value={empresaEdit.nombre_empresa}/>
                    <input  className={Style.input} type="text" name='direccion' placeholder='Direccion' value={empresaEdit.direccion}/>
                    <input  className={Style.input} type="text" name='id_producto' placeholder='Producto' value={empresaEdit.id_producto}/>
                    <input  className={Style.input} type="text" name='telefono' placeholder='Telefono' value={empresaEdit.telefono} />
                    <input  className={Style.input} type="email" name='email' placeholder='Correo electronico' value={empresaEdit.email}/>
                    <input  className={Style.input} type="text" name='lote' placeholder='Lote' value={empresaEdit.lote}/>
                    <select value={empresaEdit.activo} name="activo"  className={Style.select}>
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