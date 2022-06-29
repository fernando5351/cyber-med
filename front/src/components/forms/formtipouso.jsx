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

  useEffect(() => {
    const getConsumo = () => {
      fetch('http://localhost:4000/add/consumo')
        .then(res => res.json)
        .then(res => console.log(res))
    }
    getConsumo()
  },[])

  const submit = () => {
    if (tipo_consumo.tipo === '' || tipo_consumo.estado === '') {
      alert("Todos los campos son obligatorios")
      return
    } else {
      //consulta
      const requestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tipo_consumo)
      }
      fetch('http://localhost:4000/add/consumo', requestInit)
        .then(res => res.json)
        .then(res => console.log(res))

        //reiniciando el estado del libro
      setTipouso({
        tipo_consumo: '',
        estado: 0
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
            <form action={submit} className={Form.Form}>
              <div className={Form.formInput}>
                <input type="text" name="tipo" className={Form.input} placeholder="Nombre de la medicina"
                  onChange={change} value={tipo_consumo.tipo}
                />
              </div>
              <div multiple className={Form.formInput}>
                <select name="estado" onChange={change} value={tipo_consumo.estado} className={`${Form.input} ${Form.select}`}>
                  <option value="" defaultValue={}>ESTADO</option>
                  <option value="o">Inhabilitado</option>
                  <option value="1">Habilitado</option>
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