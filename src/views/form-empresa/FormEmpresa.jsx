import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navegacion/Navbar";
import Style from "../../css/formEmpresa.module.css";
import Select from "react-select";
import Swal from "sweetalert2"
import { ProductContextEmpresa } from "./arbol_info/ProductContextprovider";
import {ProductContextProduct} from "../productos/arbol_info/ProductContextProvider";

function FormEmpresa() {
  const { createProduct } = useContext(ProductContextEmpresa);
  const { products} = useContext(ProductContextProduct);

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

  const [empresa, setEmpresa] = useState(initialData);
  const [product,setProduct] = useState(selectProduct)

  const onChange = (e) => {
    setEmpresa({
      ...empresa,
      [e.target.name]: e.target.value,
    });
  };

  const selecData = (ev, action)=>{
    setProduct ({
      ...product,
      [action.name]: ev.value
    })
  }

  const productSelect = products.map((products)=>({
    label: products.nombre,
    value: products.id
  }))

  const navigate = useNavigate();

  const {
    nombre_empresa,
    direccion,
    telefono,
    email,
    activo,
  } = empresa

  const {
    id_producto
  } = product


  const saveEmpresa = async () => {
    if ( nombre_empresa === "" || direccion === "" ||id_producto === "" || telefono === "" || email === "" || activo === ""){
        Swal.fire({
          icon: 'error',
          title:'ERROR',
          text: 'TODOS LOS CAMPOS SON REQUERIDOS',
          timer: '2000'
        }).then((res)=>console.log(res))
    }else{
        const form = document.getElementById('formData')

        const formData = new FormData(form)

        createProduct(formData)
        navigate("/empresa");
    }
  }


  // const saveProduct = () => {
  //   console.log(empresa);
  //   createProduct(empresa);
  //   setEmpresa(initialData);
  //   navigate("/empresa");
  // };

  return (
    <div>
      <Navbar />
      <div className={Style.content}>
        <div className={Style.form}>
          <h1 className={Style.text}>REGISTRAR LA EMPRESA </h1>
          <form id="formData"  className={Style.formempresa}>
            <input
              className={Style.input}
              type="text"
              name="nombre_empresa"
              placeholder="Nombre de la empresa"
              onChange={onChange}
            />
            <input
              className={Style.input}
              type="text"
              name="direccion"
              placeholder="Direccion"
              onChange={onChange}
            />
            {/* <input  className={Style.input} type="text" name='id_producto' placeholder='Producto' value={empresaEdit.id_producto} onChange={(e)=> onChange(e.target.value,"id_producto")}/> */}
            
              <Select
                name="id_producto"
                className={Style.input}
                placeholder="producto"
                options={productSelect}
                onChange={selecData}       
              /> 
              {/* <select
              name="id_empresa"
              className={Style.input}
             >
              <option className={Style.letter}>Id_Empresa</option>          
            </select> */}
            <input
              className={Style.input}
              type="text"
              name="telefono"
              placeholder="Telefono"
              onChange={onChange}
            />
            <input
              className={Style.input}
              type="email"
              name="email"
              placeholder="Correo electronico"
              onChange={onChange}
            />
            <select name="activo" onChange={onChange} className={Style.select}>
              <option value="" defaultValue="">
                ESTADO
              </option>
              <option value={1}>ACTIVO</option>
              <option value={0}>INACTIVO</option>
            </select>
            <div className={Style.btn}>
              <button
                type="submit"
                onClick={(e) => {
                  saveEmpresa();
                  e.preventDefault();
                }}
                className={Style.button}
              >
                {" "}
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormEmpresa;
