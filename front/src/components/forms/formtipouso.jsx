import React, { useState, useEffect } from "react";
import Navbar from "../navegacion/Navbar";
import Body from "./body";
import Header from "./header";
import Footer from "./footer";
import Form from '../../css/formtipouso.module.css'
import axios from "axios";

function Formuso() {

  //capturar datos escritos por el cliente
  const [tipo_uso, setTipouso] = useState('')
  const [estado, setEstado] = useState('')

  //boton de envio
  const submit = () => {
    axios.post('http://localhost:4000/agregar/medicinas', {
      tipo_uso: tipo_uso, 
      estado: estado
  }).then(()=> {
    
  })
  }
  return (
    <div className={Form.contentUso}>
      <Navbar />
      <div className={Form.containerUso}>
        <div className={Form.contenedorPrincipalUso}>
          {/* estructura del formulario, dentro de aca debe estar los demas componentes */}
          <Header form='Agregar ' />
          <Body 
          name={setTipouso}
          />
          <Footer btn={submit} />
        </div>
      </div>
    </div>
  );
}
export default Formuso; 