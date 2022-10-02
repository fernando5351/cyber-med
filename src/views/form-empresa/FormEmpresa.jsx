import React, {useState,useEffect,useContext} from 'react';
import Navbar from '../../components/navegacion/Navbar';
import Style from '../../css/formEmpresa.module.css'
import {ProductContext} from "./arbol_info/ProductContextprovider"


function FormEmpresa(){


    const {createProduct} = useContext(ProductContext);

    const initData = {
        nombre_empresa: "",
        id_producto: "",
        direccion: "",
        telefono: "",
        email: "",
        lote: "",
        activo: ""
    }

    const [product,setProduct] = useState(initData)

    const onchange =(e)=>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        createProduct(product)
    }


  return (
    <div>
        <Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
            
                <h1 className={Style.text}>REGISTRAR LA EMPRESA </h1>
                <form action="" className={Style.formempresa}>
                    <input  className={Style.input} type="text" name='nombre_empresa' placeholder='Nombre de la empresa' onChange={onchange} />
                    <input  className={Style.input} type="text" name='direccion' placeholder='Direccion' onChange={onchange}/>
                    <input  className={Style.input} type="text" name='id_producto' placeholder='Producto' onChange={onchange}/>
                    <input  className={Style.input} type="text" name='telefono' placeholder='Telefono' onChange={onchange}/>
                    <input  className={Style.input} type="email" name='email' placeholder='Correo electronico' onChange={onchange}/>
                    <input  className={Style.input} type="text" name='lote' placeholder='Lote' onChange={onchange} />
                    <select name="activo" onChange={onchange}  className={Style.select}>
                        <option value="" disabled selected>ESTADO</option>
                        <option value={1}>activo</option>
                        <option value={0}>inactivo</option>
                    </select>
                    <div className={Style.btn}>
                    <button type='submit' onClick={handleSubmit} className={Style.button}> ENVIAR</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormEmpresa;

