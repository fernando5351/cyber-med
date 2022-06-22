import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import Btnvistauso from "../../components/btn/Btnvistauso";
import Btnview from '../../css/vistauso.module.css';

function Vistauso() {
    return(
      <div className={Btnview.contenedormain}>
          <Navbar />
          <div className={Btnview.contenedorVista}>
            <div className={Btnview.contBarranav}>
              <Barranav />
            </div>
            <div className={Btnview.contenedor}>
                 <Btnvistauso />
            </div>
          </div>
      </div>
    );
}

export default Vistauso;