import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import Btnvistauso from "../../components/btn/Btnvistauso";
import '../../css/vistauso.css'

function Vistauso() {
    return(
      <div className='contenedor-vistauso'>
          <Navbar />
          <div className="contenedor-de-vista">
            <Barranav />
            <Btnvistauso />
          </div>
      </div>
    );
}

export default Vistauso;