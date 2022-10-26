import React, { useState, useContext } from "react";
import Back from "../../icon/Vista/retroceder.png";
import Navbar from "../../components/navegacion/Navbar";
import Style from "../../css/formEmpresa.module.css";
import Barra from "../../css/barranav.module.css";
import Swal from "sweetalert2"
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ProductContextEmpresa } from "../form-empresa/arbol_info/ProductContextprovider";
import { ProductContextLote } from "./arbol_info/ProductContextprovider";

function FormLote() {
  const { createProduct } = useContext(ProductContextLote);
  const {products} = useContext(ProductContextEmpresa)


  const initialData = {
    fecha_ingreso: "",
    fecha_vencimiento: "",
    detalle_producto: "",
    cantidad: "",
    precio_producto: "",
    activo: "",
  };

  const SelectState = {
    id_empresa: ""
  }

  const [lote, setLote] = useState(initialData);
  const [state,setState] = useState(SelectState)

 

  const onChange = (e) => {
    setLote({
      ...lote,
      [e.target.name]: e.target.value
    });
  };

  const dataChange = (ev,action) => {
    setState({
      ...state,
      [action.name]: ev.value
    })
  }

  const empresaSelect = products.map((empresa)=>({
    label: empresa.nombre_empresa,
    value: empresa.id
  }))

  const Navigate = useNavigate();  

  const {
    fecha_ingreso, 
    fecha_vencimiento,
    detalle_producto,
    cantidad,
    precio_producto,
    activo,
  } = lote

  const {
    id_empresa
  } = state

  const saveLote = async () => {
    if (fecha_ingreso === "" || fecha_vencimiento === "" || detalle_producto === "" || cantidad === "" || precio_producto === "" ||id_empresa === "" || activo === ""){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'TODOS LOS CAMPO SON REQUERIDOS',
          timer: '2000',
        }).then((res)=>console.log(res))
    }else {
      const form = document.getElementById('formData')

      const formData = new FormData(form);

      createProduct(formData)
      Navigate("/empresa/lote");
    }
  };

  // const saveLote = () => {
  //   console.log(lote);
  //   createProduct(lote);
  //   setLote(initialData);
  //   Navigate("/empresa/lote");
  // };

  const backTableL = () => {
    Navigate("/empresa/lote");
  };

  return (
    <div>
      <Navbar />
      <img
        className={Barra.back2}
        alt=""
        src={Back}
        onClick={() => {
          backTableL();
        }}
      />
      <div className={Style.content}>
        <div className={Style.form}>
          <h1 className={Style.text}>REGISTRAR EL LOTE</h1>
          <form  id='formData' className={Style.formempresa}>
            <input
              className={Style.input}
              type="date"
              name="fecha_ingreso"
              placeholder="Fecha de ingreso"
              onChange={onChange}
            />
            <input
              className={Style.input}
              type="date"
              name="fecha_vencimiento"
              placeholder="Fecha de vencimiento"
              onChange={onChange}
            />
            <input
              className={Style.input}
              type="text"
              name="detalle_producto"
              placeholder="Detalles del Lote"
              onChange={onChange}
            />
            <input
              className={Style.input}
              type="numeric"
              name="cantidad"
              placeholder="Cantidad"
              onChange={onChange}
            />
            <input
              className={Style.input}
              type="numeric"
              name="precio_producto"
              placeholder="Precio del producto"
              onChange={onChange}
            />
            {/* <input
                          className={Style.input}
                          type="text"
                          name="id_empresa"
                          placeholder="Id de la empresa"
                          onChange={onChange}
                        /> */}
            <Select
              name="id_empresa"
              className={Style.input} 
              onChange={dataChange}
              options={empresaSelect}
            /> 
            <select name="activo" className={Style.select} onChange={onChange}>
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
                  saveLote();
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
export default FormLote;
