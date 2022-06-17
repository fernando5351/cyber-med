import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import "../../css/modificacionmed.css";
import imgsubir from "../../icon/Create/subir.png";

function Modificacionmed() {
  return (
    <div>
      <Navbar />
      <div className="contenedor-modificacion">
        <div className="contenedor-img">
          <a class="waves-effect waves-light btn butonmod">
            <img className="subiricon" src={imgsubir} alt="" />
          </a>
        </div>
        <div className="contenedor-dato">
          <form id="form-modific">
            <div id="diseno-dato">
              PRECIO :
              <div className="input-field inline">
                <input id="entradatext" type="text" className="validate" />
              </div>
            </div>
            <div className="col s12" id="diseno-dato">
              GRAMO :
              <div className="input-field inline">
                <input id="entradatext" type="text" className="validate" />
              </div>
            </div>
            <div id="diseno-dato">
              MARCA :
              <div className="input-field inline">
                <input id="entradatext" type="text" className="validate" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="content-info">
        <div className="contenedor-info">
          <form id="form-info">
            <div id="diseno-info">
              DESCRIPCION :
              <div className="input-field inline">
                <input id="texto-info" type="text" className="validate" />
              </div>
            </div>

            <select multiple>
            <option value="" disabled selected>USO :</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

            <select class="browser-default" id="select-diseno">
            <option value="" disabled selected>ADMINISTRACION :</option>
            <option id="diseño-text" value="1">Option 1</option>
            <option id="diseño-text" value="2">Option 2</option>
            <option id="diseño-text" value="3">Option 3</option>
          </select>
          <div id="diseno-info">
              CANTIDAD :
              <div className="input-field inline">
                <input id="texto-info" type="text" className="validate" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modificacionmed;
