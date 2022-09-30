import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'

function Edit() {

  
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
export default Edit; 