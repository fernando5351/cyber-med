import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import '../../css/formtipouso.css'

function Formuso() {
    return(
        <div className='contenedor-Formuso'>
        <Navbar />
            <div className='contenedor-principal'>
            <h1>Tipo de Uso</h1>
            <div className="input-field col s6">
            <input id="last_name" type="text" class="validate"/>
            <label for="last_name">Tipo de Uso</label>
            </div>
            <div class="input-field col s12">
    <select>
      <option value="" disabled selected>ESTADO</option>
      <option value="1">Habilitado</option>
      <option value="2">Inhabilitado</option>
    </select>
  </div>
<div className="Botones">
</div>
        </div>
          </div>
    );
}
export default Formuso; 