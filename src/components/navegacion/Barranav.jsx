import React from "react";
import '../../css/barranav.css'
import Retro from '../../icon/Vista/retroceder.png';
import Agregar from '../../icon/Vista/agregar.png';

function Barranav(props) {
    return(
      <div className='contenedor-barra'>
          <div className='contenedor-btnretro'>
             <a class="waves-effect waves-light btn-large buttonB">
             <img
             className='icoV' 
             src={Retro} 
             alt="retroceder" />
             </a>
          </div>
          <div className='contenedor-titulo'>
             <p>{props.Titulo}</p>
          </div>
          <div className='contenedor-btnadd'>
            <a class="waves-effect waves-light btn-large buttonB">
                <img 
                className="icoV"
                src={Agregar} 
                alt="Agregar" />
            </a>
          </div>
      </div>
    );
}

export default Barranav;