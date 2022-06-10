import React from "react";
import '../../css/barranav.css'
import Retro from '../../icon/Vista/retroceder.png';
import Agregar from '../../icon/Vista/agregar.png';

<<<<<<< HEAD
function Barranav() {
  return (
    <div className="contenedor-barra">
      <div className="retro">
        <img
          className='atras'
          src={Retro}
          alt='' />
=======
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
             <h1>HOLA MUNDO</h1>
          </div>
          <div className='contenedor-btnadd'>
            <a class="waves-effect waves-light btn-large buttonB">
                <img 
                className="icoV"
                src={Agregar} 
                alt="Agregar" />
            </a>
          </div>
>>>>>>> 96ac131965c2a8c87cdc52d5bcda6d40b5ad3907
      </div>
      <div className="agregar">
        <img
          className='annadir'
          src={Agregar}
          alt='' />
      </div>
    </div>
  );
}

export default Barranav;