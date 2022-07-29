
import React, { useState, useEffect } from "react";
import Navbar from "../navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'

function Formuso() {

  //capturar datos escritos por el cliente
  const [tipo_consumo, setTipouso] = useState({
    tipo_consumo: '',
    estado: 0
  })

  const change = (event) => {
    console.log(event.target.value)
    setTipouso({
      ...tipo_consumo,
      [event.target.name]: event.target.value
    })
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
            <form  className={Form.Form}>
              <div className={Form.formInput}>
                <input type="text" name="tipo" className={Form.input} placeholder="Nombre de la medicina"
                  onChange={change} value={tipo_consumo.tipo}
                />
              </div>
              <div multiple className={Form.formInput}>
                <select name="estado" onChange={change} value={tipo_consumo.estado} className={`${Form.input} ${Form.select}`}>
                  <option value="" defaultValue="">ESTADO</option>
                  <option defaultValue="o">Inhabilitado</option>
                  <option defaultValue="1">Habilitado</option>
                </select>
              </div>
              <div className={Form.botones}>
                <button type="" name="guardar" className={Form.buton1}>GUARDAR</button>
                <button type="submit" name="eliminar" className={Form.buton2}>ELIMINAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formuso; 