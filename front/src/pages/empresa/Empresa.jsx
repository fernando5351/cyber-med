import React from "react";
import ContTa from '../../css/contenttabla.module.css'
import Navbar from "../../components/navegacion/Navbar";
import Tableempresa from "../../components/table/Tableempresa";

function Empresa(){
    return(
      <div className={ContTa.contenedorMT}>
        <Navbar />
        <div className={ContTa.contenedorT}>
        <Tableempresa />
        </div>
      </div>
    );
}
export default Empresa;
