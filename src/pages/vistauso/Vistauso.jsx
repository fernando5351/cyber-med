import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import '../../css/vistauso.css'

function Vistauso() {
    return(
      <div className='contenedor-vistauso'>
        <Navbar />
          <div className='contenedor-principal'>
            <Barranav />
            <h1>HOLA MUNDO</h1>
          </div>
      </div>
    );
}

export default Vistauso;