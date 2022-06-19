import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import '../../css/formtipouso.css'

function Formuso() {
  return (
    <div className="content-uso">
      <Navbar />
      <div className="container-uso">
        <div className='contenedor-principal-uso'>
          <div className="texto-uso">
            <h1>Tipo de Uso</h1>
          </div>
          <form className="contenedor-form-uso">
            <div className="entrada-texto">
              <div class="input-field col s6">
                <input id="last_name" type="text" />
                <label for="last_name">Tipo de Uso</label>
              </div>
            </div>
            <div className="select">
              <div class="input-field col s12">
                <select className="selection">
                  <option value="" disabled selected>ESTADO</option>
                  <option value="1">Habilitado</option>
                  <option value="0">Inhabilitado</option>
                </select>
              </div>
            </div>
          </form>
          <div className="botones">
            <button type="" name="guardar" className="buton1">GUARDAR</button>
            <button type="" name="eliminar" className="buton2">ELIMINAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formuso; 