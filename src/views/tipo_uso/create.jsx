import React, { useState,useContext} from "react";
 import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'
import {ProductContext} from "./arbol_info/productContextprovider"

function Formuso() {

  const { createProduct } = useContext(ProductContext)

  const initialData =  {
    tipo_uso: "",
    estado: ""
  }
  const [consumo, setConsumo] = useState(initialData)

  const navigate = useNavigate()

  const onChange = (e) => {
    setConsumo({
      ...consumo,
      [e.target.name]: e.target.value
    })
  }
  const saveProduct = () => {
    //console.log(consumo);
    createProduct(consumo)
    setConsumo(initialData)
    navigate("/medicinas/listar-uso")
  }
 

return (
    <div className={Form.contentUso}>
      <Navbar />
      <div className={Form.containerUso}>
        <div className={Form.contenedorPrincipalUso}>
          <div className={Form.textoUso}>
            <h1>Agregar Tipo de Uso</h1>
          </div>
          <div className={Form.body}>
            <form className={Form.Form}>
              <div className={Form.formInput}>
                <input type="text" name="tipo_uso" className={Form.input} placeholder="Tipo uso de uso"
                onChange={
                  onChange
                }
                />
              </div>
              <div multiple className={Form.formInput}>
                <select name="estado" className={`${Form.input} ${Form.select}`} 
                    onChange={
                      onChange
                    } >
                  <option value="" defaultValue="">ESTADO</option>
                  <option value={0}>Inhabilitado</option>
                  <option value={1}>Habilitado</option>
                </select>
              </div>
              <div className={Form.botones}>
                <button type="submit" name="guardar" onClick={(e)=>{
                  saveProduct() }} className={Form.buton1}>GUARDAR</button>
                <button type="reset" name="eliminar" className={Form.buton2}>LIMPIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formuso; 