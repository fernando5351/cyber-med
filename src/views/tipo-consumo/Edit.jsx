import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'
import { useNavigate } from "react-router-dom";
import { ProductContextConsumo } from './arbol_info/ProductContextProvider'

function Edit() {

  const {
    updateProduct 
  } = useContext(ProductContextConsumo)
  
  const initialData =  {
    tipo_consumo: "",
    estado: ""
  }
  const [consumo, setConsumo] = useState(initialData)

  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('array'))
    if (data) {
      setConsumo(data)
    }
  }, []);

  const onChange = (data, field) => {
    setConsumo({
      ...consumo,
      [field]: data,
    });
  };

  const saveProduct = () => {
    console.log(consumo)
    updateProduct(consumo)
    setConsumo(initialData)
    navigate("/medicinas/listar-consumo")
  }

  const cancel = () => {
    navigate('/medicinas/listar-consumo')
  }

  return (
    <>
      <div className={Form.contentUso}>
        <Navbar />
        <div className={Form.containerUso}>
          <div className={Form.contenedorPrincipalUso}>
            <div className={Form.textoUso}>
              <h1>Editar Tipo de Consumo</h1>
            </div>
            <div className={Form.body}>
              <form className={Form.Form}>
                <div className={Form.formInput}>
                  <input type="text" name="tipo_consumo" className={Form.input} placeholder="Tipo uso de consumo"
                  value={consumo.tipo_consumo}
                  onChange={ (e) => onChange(e.target.value, "tipo_consumo") }/>
                </div>
                <div multiple className={Form.formInput}>
                  <select name="estado" className={`${Form.input} ${Form.select}`}
                  value={consumo.estado}
                  onChange={ (e) => onChange(e.target.value, "estado") }>
                    <option value="" defaultValue="">ESTADO</option>
                    <option value={0}>Inhabilitado</option>
                    <option value={1}>Habilitado</option>
                  </select>
                </div>
                <div className={Form.botones}>
                  <button name="guardar" onClick={(e) => {
                    saveProduct()
                  }} className={Form.buton1}>GUARDAR</button>
                  <button name="eliminar" className={Form.buton2}
                  onClick={()=> { cancel() }} >
                    Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edit;