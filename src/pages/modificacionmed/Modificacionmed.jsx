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
                      <div class="input-field inline">
                      <input id="first_name" type="text" class="validate entrada" />
                      </div>
                     </div>
                     <div className="diseño-form">
                     PRECIO :
                      <div class="input-field inline">
                      <input id="first_name" type="text" class="validate" />
                      </div>
                     </div>
                      </form>
                    </div>
                </div>
              <div className="content-info">
            <div className="contenedor-info">
          </div>
        </div>
      </div>
    );
}

export default Modificacionmed;