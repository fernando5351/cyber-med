import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import '../../css/formtipouso.css'

function Formuso() {
    return(
        <div className='contenedor-Formuso'>
        <Navbar />
            <div className='contenedor-principal'>
            <h1>Tipo de Uso</h1>
            <div className="Entrada-texto">
            <div class="input-field col s6">
            <input id="last_name" type="text" class="validate"/>
            <label for="last_name">Tipo de Uso</label>
            </div>
            </div>
    <div className="select">
    <div class="input-field col s12">
    <select>
      <option value="" disabled selected></option>
      <option value="1">Habilitado</option>
      <option value="2">Inhabilitado</option>
    </select>
    <label for="last_name">Estado</label>
  </div>
    </div>
   
<div className="Botones">
<button  type="" name="guardar" className="buton1">GUARDAR</button>
<button  type="" name="eliminar" className="buton2">ELIMINAR</button>
</div>
        </div>
          </div>
    );
}
export default Formuso; 