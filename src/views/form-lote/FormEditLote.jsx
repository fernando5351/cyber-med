import React, { useContext, useEffect, useState } from "react";
import Back from "../../icon/Vista/retroceder.png";
import Navbar from "../../components/navegacion/Navbar";
import Style from "../../css/formEmpresa.module.css";
import Barra from "../../css/barranav.module.css";
import Select from  "react-select"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ProductContextLote } from "./arbol_info/ProductContextprovider";
import { ProductContextEmpresa} from "../form-empresa/arbol_info/ProductContextprovider";

function FormEditLote() {
  const { updateProduct } = useContext(ProductContextLote);
  const { products} = useContext(ProductContextEmpresa);
 
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

  const [state,setState] = useState(SelectState);

  const [editLote, setLoteEdit] = useState(initialData);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lote"));
    if (data) setLoteEdit(data);
  }, []);

  const onChange = (data, field) => {
    setLoteEdit({
      ...editLote,
      [field]: data,
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
    } = editLote

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
  
        updateProduct(formData)
        Navigate("/empresa/lote");
      }
    };
  

  // const saveLote = () => {
  //   console.log(editLote);
  //   updateProduct(editLote);
  //   setLoteEdit(initialData);
  //   Navigate("/empresa/lote");
  // };

  const backTable = () => {
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
          backTable();
        }}
      />
      <div className={Style.content}>
        <div className={Style.form}>
          <h1 className={Style.text}>EDITAR EL LOTE</h1>
          <form  id="formData" className={Style.formempresa}>
            <input
              className={Style.input}
              type="date"
              name="fecha_ingreso"
              value={editLote.fecha_ingreso}
              placeholder="Fecha de ingreso"
              onChange={(e) => onChange(e.target.value, "fecha_ingreso")}
            />
            <input
              className={Style.input}
              type="date"
              name="fecha_vencimiento"
              value={editLote.fecha_vencimiento}
              placeholder="Fecha de vencimiento"
              onChange={(e) => onChange(e.target.value, "fecha_vencimiento")}
            />
            <input
              className={Style.input}
              type="text"
              name="detalle_producto"
              value={editLote.detalle_producto}
              placeholder="Detalles del Lote"
              onChange={(e) => onChange(e.target.value, "detealle_producto")}
            />
            <input
              className={Style.input}
              type="numeric"
              value={editLote.cantidad}
              name="cantidad"
              placeholder="Cantidad"
              onChange={(e) => onChange(e.target.value, "cantidad")}
            />
            <input
              className={Style.input}
              type="numeric"
              name="precio_producto"
              value={editLote.precio_producto}
              placeholder="Precio del producto"
              onChange={(e) => onChange(e.target.value, "precio_producto")}
            />
            {/* <input
                          className={Style.input}
                          type="text"
                          name="id_empresa"
                          value={editLote.id_empresa}
                          placeholder="Id de la empresa"
                          onChange={(e)=> onChange(e.target.value, "id_empresa")}
                        /> */}
            {/* <Select  
              className={Style.letter}
              name= "id_empresa"
              placeholder="empresa"
              onChange={dataChange}
              options={empresaSelect}
            /> */}
            <select
              name="id_empresa"
              className={Style.input}
             >
              <option className={Style.letter}>Id_Empresa</option>          
            </select>
            <select
              value={editLote.activo}
              name="activo"
              className={Style.select}
              onChange={(e) => onChange(e.target.value, "activo")}
            >

              <option value={1}>ACTIVO</option>
              <option value={0}>INACTIVO</option>
            </select>
            <div className={Style.btn}>
              <button
                type="submit"
                className={Style.button}
                onClick={(e) => {
                  saveLote();
                }}
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
export default FormEditLote;
