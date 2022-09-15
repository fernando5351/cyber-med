import React, { useState, useEffect } from "react";
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'

function EditConsumo() {

  const [consumo, setConsumo] = useState({})
  
  const change = ({ target }) => {
    console.log(target.value)
    setConsumo({
      ...consumo,
      [target.name]: target.value
    })
  }
  return (
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
                  onChange={change}
                />
              </div>
              <div multiple className={Form.formInput}>
                <select name="estado" onChange={change} className={`${Form.input} ${Form.select}`}>
                  <option value="" defaultValue="">ESTADO</option>
                  <option value={0}>Inhabilitado</option>
                  <option value={1}>Habilitado</option>
                </select>
              </div>
              <div className={Form.botones}>
                <button name="guardar" onClick={(e) => {
                  
                  e.preventDefault();
                }} className={Form.buton1}>GUARDAR</button>
                <button type="reset" name="eliminar" className={Form.buton2}>LIMPIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditConsumo;