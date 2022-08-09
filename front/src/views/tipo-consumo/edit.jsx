import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'

function EditConsumo() {
    //capturar el estado con el hook
  const [tipoConsumo, setTipo_Consumo] = useState({})

  const change = (e) => {
    console.log(e.target.value);
    setTipo_Consumo({
      ...tipoConsumo,
      [e.target.name]: e.target.value
    })
  }
  //destructuracion
  let { tipo_consumo, estado } = tipoConsumo;
    
  //redireccionar a medicinas
    let navigate = useNavigate()

  const handleSubmit = (id) => {
    
    //validacion de que los campos no esten vacios
    if ( tipo_consumo === "" || estado === "" ) {
      alert("Todos los campos son requeridos")
    } else {
      const RequestInit = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(tipoConsumo)
      }
      const data = fetch(`http://localhost:4000/tipo_consumo/136`, RequestInit)
      console.log(data)
      .then( res => res.json() )
      .then( res => res.json() )
      .then( navigate("/medicinas") )
    }
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
                <input value={tipoConsumo.tipo_consumo} type="text" name="tipo_consumo" className={Form.input} placeholder="Tipo uso de consumo"
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
                <button type="submit" name="guardar" onClick={ () =>{
                    handleSubmit()
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