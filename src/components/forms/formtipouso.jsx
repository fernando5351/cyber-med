
import React, { useState, useEffect } from "react";
import Navbar from "../navegacion/Navbar";
import Form from "../../css/formtipouso.module.css";

function Formuso() {
  //capturar datos escritos por el cliente
  const [tipo_consumo, setTipouso] = useState({
    tipo_uso: "",
    estado: ""
  })

  const change = (event) => {
    console.log(event.target.value);
    setTipouso({
      ...tipo_consumo,
      [event.target.name]: event.target.value,
    });
  };

  //destruction
  let { tipo_uso, estado } = tipo_consumo

  const handleSubmit = () => {
    //validacion para que los campos no esten null
    if (tipo_uso === "" || estado === "") {
      alert("todos los campos son requeridos")
      return
    } else {
      const RequestInit = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tipo_consumo)
      }
      fetch('http://localhost:4000/tipo_uso', RequestInit)
      .then( res => res.text())
      .then( res => console.log(res))

      setTipouso({
        tipo_uso: "",
        estado: ""
      })
    }
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
                <input type="text" name="tipo_uso" className={Form.input} placeholder="Tipo uso de la medicina"
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
                <button type="submit" name="guardar" onClick={handleSubmit} className={Form.buton1}>GUARDAR</button>
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
