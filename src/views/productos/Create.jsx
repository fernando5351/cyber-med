import React, { useContext, useState } from "react";
import Navbar from "../../components/navegacion/Navbar";
import vistamed from "../../css/vistamed.module.css";
import imgsubir from "../../icon/Create/subir.png";
import select from "../../css/select.module.css";
import Select from "react-select";
import { ProductContext } from "./arbol_info/ProductContextProvider"

function VistaMedy(props) {

  const { createProduct } = useContext(ProductContext)  
  
  const initialData = {
    nombre: "",
    precios: "",
    descripcion: "",
    marca: "",
    id_tipo_consumo: "",
    id_tipo_uso: "",
    cantidad_medicamento: "",
    cant_gramos: "",
    file: ""
  }
  const [product, setProduct] = useState({
    nombre: "",
    precios: "",
    descripcion: "",
    marca: "",
    id_tipo_consumo: "",
    id_tipo_uso: "",
    cantidad_medicamento: "",
    cant_gramos: "",
    file: ""
  })

  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const options = [
    { value: "Opcion 1", label: "Opcion 1" },
    { value: "Opcion 2", label: "Opcion 2" },
    { value: "Opcion 3", label: "Opcion 3" },
  ];

  return (
    <div>
      <Navbar />
      <div className={vistamed.contentPrincipal}>
        <div className={vistamed.contentModificacion}>
          <div className={vistamed.Img}>
            <button className={vistamed.butonmed}>
              <input type="file" className={vistamed.subiricon} src={imgsubir} alt="" name="file" 
              onChange={onChange}
              />
            </button>
          </div>
          <div className={vistamed.Dato}>
            <form id={vistamed.estiloForm}>
              <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>NOMBRE :</label>
                <input id={vistamed.estilo} type="text" name="nombre" 
                onChange={onChange}/>
              </div>
              <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>PRECIO :</label>
                <input id={vistamed.estilo} type="text" name="precios"
                onChange={onChange}
                />
              </div>
              <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>GRAMOS :</label>
                <input id={vistamed.estilo} type="text" name="cant_gramos" 
                onChange={onChange}
                />
              </div>
              <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>MARCA :</label>
                <input id={vistamed.estilo} type="text"  name="marca" 
                onChange={onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className={vistamed.contentInfo}>
          <div className={vistamed.Info}>
            <form id={vistamed.formEstilo}>
              <div className={vistamed.containerFormMed}>
                <div className={vistamed.caja}>
                  <label id={vistamed.estiloColor}>DESCRIPCION :</label>
                  <input id={vistamed.colorInfo} type="text" name="descripcion"
                  onChange={onChange}
                  />
                </div>
                <div className={select.Caja}>
                  <div className={select.estilo}>
                    <label id={select.titulo}>USO :</label>
                    <Select
                      name="id_tipo_uso"
                      onChange={onChange}
                      className={select.Select}
                      isMulti
                      options={options}
                    />
                  </div>
                  <div className={select.estilo}>
                    <label id={select.titulo2}>ADMINISTRACION :</label>
                    <Select options={options} className={select.options} name="id_tipo_consumo"
                    onChange={onChange}
                    />
                  </div>
                </div>
                <div className={`${vistamed.caja} ${vistamed.estiloBottom}`}>
                  <label id={vistamed.estiloColor}>CANTIDAD :</label>
                  <input id={vistamed.colorInfo} type="text" name="cantidad_medicamento"
                  onChange={onChange}
                  />
                </div>
                <div className={`${vistamed.caja} ${vistamed.estiloBottom}`}>
                  <label id={vistamed.estiloColor}>LOTE :</label>
                  <input id={vistamed.colorInfo} type="text" />
                </div>
              </div>
              <div className={vistamed.containerFormBtn}>
                <button className={vistamed.btnForm}>Cancelar</button>
                <button className={vistamed.btnForm}>
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaMedy;
