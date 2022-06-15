import React from "react";
import Navbar from '../../components/navegacion/Navbar';
import '../../css/modificacionmed.css'
import imgsubir from '../../icon/Create/subir.png';

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
                      <form>
                     <div className="diseño-form">
                     PRECIO :
                      <div className="input-field inline">
                      <input id="Precio" type="text" className="validate" />
                      </div>
                     </div>
                     <div className="diseño-form">
                     GRAMOS :
                      <div className="input-field inline">
                      <input id="Gramos" type="text" className="validate" />
                      </div>
                     </div>
                     <div className="diseño-form">
                     MARCA :
                      <div className="input-field inline">
                      <input id="Marca" type="text" className="validate" />
                      </div>
                     </div>
                      </form>
                    </div>
                </div>
              <div className="content-info">
            <div className="contenedor-info">
              <form className="diseño-info">
                <div>
                  DESCRIPCION :
                  <div className="input-field inline">
                    <input id='descripcion' type="text" className="validate" />
                  </div>
                </div>
                
                <select>
                <option value="" disabled selected>USO :</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              
              <select>
                <option value="" disabled selected>ADMINISTRACION :</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>

                <div>
                  CANTIDAD :
                  <div className="input-field inline">
                    <input id='cantidadmed' type="text" className="validate" />
                  </div>
                </div>
                <a class="btn-floating btn-large waves-effect waves-light buttonmod"></a>
              </form>
          </div>
        </div>
      </div>
    );
}

export default Modificacionmed;