import React from "react";
import '../../css/barranav.css'
import Retro from '../../icon/Vista/retroceder.png';
import Agregar from '../../icon/Vista/agregar.png';
import { useNavigate } from 'react-router-dom';

function Barranav() {
    return(
    <div className='contenedor-barra'>
      <div className='retro'>
        <img
          className='atras'
          src={Retro}
          alt='' />
      </div>
      <div className='agregar'>
        <img
          className='annadir'
          src={Agregar}
          alt='' />
      </div>
    </div>
  );
}

export default Barranav;