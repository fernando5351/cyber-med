import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navegacion/Navbar";
import Style from "../../css/formEmpresa.module.css";
import { ProductContextEmpresa } from "./arbol_info/ProductContextprovider";

function FormEmpresa() {
  const { createProduct } = useContext(ProductContextEmpresa);

  const initialData = {
    nombre_empresa: "",
    id_producto: "",
    direccion: "",
    telefono: "",
    email: "",
    activo: "",
  };

  const [empresa, setEmpresa] = useState(initialData);

  const navigate = useNavigate();

  const onChange = (e) => {
    setEmpresa({
      ...empresa,
      [e.target.name]: e.target.value,
    });
  };
  const saveProduct = () => {
    console.log(empresa);
    createProduct(empresa);
    setEmpresa(initialData);
    navigate("/empresa");
  };

  return (
    <div>
      <Navbar />
      <div className={Style.content}>
        <div className={Style.form}>
          <h1 className={Style.text}>REGISTRAR LA EMPRESA </h1>
          <form action="" className={Style.formempresa}>
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
            <select className={Style.input}>
              <option className={Style.letter} value="">ID_Producto</option>
            </select>
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
                  saveProduct();
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
