import React, {useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../components/navegacion/Navbar';
import Style from '../../css/formEmpresa.module.css';
import {ProductContext} from './arbol_info/ProductContextprovider'

function FormEmpresa(){


  const { createProduct } = useContext(ProductContext)


    const initialData =  {
      nombre_empresa: "",
      id_producto: "",
      direccion: "",
      telefono: "",
      email: "",
      lote: "",
      activo: ""
    }
    
    const [empresa, setEmpresa] = useState(initialData)
  
    const navigate = useNavigate()
  
    const onChange = (e) => {
      setEmpresa({
        ...empresa,
        [e.target.name]: e.target.value
      })
    }
    const saveProduct = () => {
      //console.log(consumo);
      setEmpresa(initialData)
      navigate("/empresa/crear")
    }

  return (
    <div>
        <Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
            
                <h1 className={Style.text}>REGISTRAR LA EMPRESA </h1>
                <form action="" className={Style.formempresa}>
                    <input  className={Style.input} type="text" name='nombre_empresa' placeholder='Nombre de la empresa' onChange={onChange} />
                    <input  className={Style.input} type="text" name='direccion' placeholder='Direccion' onChange={onChange}/>
                    <input  className={Style.input} type="text" name='id_producto' placeholder='Producto' onChange={onChange}/>
                    <input  className={Style.input} type="text" name='telefono' placeholder='Telefono' onChange={onChange}/>
                    <input  className={Style.input} type="email" name='email' placeholder='Correo electronico' onChange={onChange}/>
                    <input  className={Style.input} type="text" name='lote' placeholder='Lote' onChange={onChange} />
                    <select name="activo" onChange={onChange}  className={Style.select}>
                        <option value="" disabled selected>ESTADO</option>
                        <option value={1}>activo</option>
                        <option value={0}>inactivo</option>
                    </select>
                    <div className={Style.btn}>
                    <button type='submit' onClick={saveProduct} className={Style.button}> ENVIAR</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormEmpresa;

