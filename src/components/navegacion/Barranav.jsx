import React from "react";
import Barra from "../../css/barranav.module.css";
import Retro from "../../icon/Vista/retroceder.png";
import Agregar from "../../icon/Vista/agregar.png";
import { useNavigate } from "react-router-dom";

function Barranav(props) {
  const Navigate = useNavigate();

  const Add = () => {
    Navigate("/medicinas/tabla");
  };

  return (
    // este es el que deben elegir
    <div className={Barra.contenedorBarra}>
      <div className={Barra.retro}>
       
      </div>
      <div className={Barra.tituloCont}>
        <p id={Barra.titulo}>{props.titulocont}</p>
      </div>
      <div className={Barra.agregar}>

      </div>
    </div>
  );
}

export default Barranav;
