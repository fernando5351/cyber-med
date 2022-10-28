import React, { useContext, useEffect, useState } from "react";
import Navbar from '../../components/navegacion/Navbar'
import Style from '../../css/formEmpresa.module.css'
import Select from 'react-select';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ProductContextEmpresa } from "./arbol_info/ProductContextprovider"
import {ProductContextProduct} from "../productos/arbol_info/ProductContextProvider"


function FormEditEmpresa() {

    const { updateProduct } = useContext(ProductContextEmpresa);
    const {products} = useContext(ProductContextProduct);

    const initialData = {
        nombre_empresa: "",
        direccion: "",
        telefono: "",
        email: "",
        activo: "", 
      };

    const selectProduct = {
        id_producto: ""
    }


    const [product,setProduct] = useState(selectProduct)

    const [empresaEdit, setEmpresaEdit] = useState(initialData)
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("empresa"))
      if(data) setEmpresaEdit(data)
    }, [])


    const DataChange = (ev,action)=>{
        setProduct({
            ...product,
            [action.name]: ev.value
        })
    }

    const onChange = (data,field) =>{
        setEmpresaEdit({
            ...empresaEdit,
            [field]: data,
        });
    };
    
    const productSelect = products.map((products)=>({
        label: products.nombre,
        value: products.id
    }))

    const navigate = useNavigate()

    const {
        nombre_empresa,
        direccion,
        telefono,
        email,
        activo
    } = empresaEdit

    const {
        id_producto
    } = product



     const saveEmpresa = async () => {
        if (nombre_empresa === "" || direccion ==="" || id_producto === "" || telefono === "" || email === "" || activo === ""){
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'TODOS LOS CAMPOS SON REQUERIDOS',
                timer: '2000'
            }).then((res)=>console.log(res))
        }else{
            const form = document.getElementById('formData');

            const formData = new FormData(form)

            updateProduct(formData);
            navigate("/empresa")
        }
     }

    // const saveProduct = () => {
    //     console.log(empresaEdit)
    //     updateProduct(empresaEdit)
    //     setEmpresaEdit(initialData)
    //     navigate("/empresa")
    // }
    
    return(
        <div>
        <Navbar />
        <div className={Style.content}>
            <div className={Style.form}>
            
                <h1 className={Style.text}>EDITAR LA EMPRESA </h1>
                <form  id="formData"  action="" className={Style.formempresa}>
                    <input  className={Style.input} type="text" name='nombre_empresa' placeholder='Nombre de la empresa' value={empresaEdit.nombre_empresa} onChange={(e)=> onChange (e.target.value,"nombre_empresa")}/>
                    <input  className={Style.input} type="text" name='direccion' placeholder='Direccion' value={empresaEdit.direccion} onChange={(e) => onChange(e.target.value, "direccion")}/>
                    {/* <input  className={Style.input} type="text" name='id_producto' placeholder='Producto' value={empresaEdit.id_producto} onChange={(e)=> onChange(e.target.value,"id_producto")}/> */}
                     <Select
                        className={Style.input}
                        placeholder= "producto"
                        name="id_producto"
                        options={productSelect}
                        onChange={DataChange}
                     />      
                     {/* <select
              name="id_empresa"
              className={Style.input}
             >
              <option className={Style.letter}>Id_Empresa</option>          
            </select>       */}
                    <input  className={Style.input} type="text" name='telefono' placeholder='Telefono' value={empresaEdit.telefono} onChange={(e)=> onChange(e.target.value, "telefono")} />
                    <input  className={Style.input} type="email" name='email' placeholder='Correo electronico' value={empresaEdit.email} onChange={(e)=> onChange(e.target.value, "email")}/>
                    <select value={empresaEdit.activo} name="activo"  className={Style.select} onChange={(e)=> onChange(e.target.value,"activo")}>
                        <option value="" disabled selected>ESTADO</option>
                        <option value={1}>ACTIVO</option>
                        <option value={0}>INACTIVO</option>
                    </select>
                    <div className={Style.btn}>
                    <button type='submit' name="guardar" onClick={(e)=>{
                        saveEmpresa()
                    }} className={Style.button}> ENVIAR</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
    )   
}
export default FormEditEmpresa;