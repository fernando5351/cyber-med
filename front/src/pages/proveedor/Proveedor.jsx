import React from "react";
import ContTa from '../../css/contenttabla.module.css'
import Navbar from "../../components/navegacion/Navbar";
import Tableproveedor from "../../components/table/Tableproveedor";

function Proveedor(){
    return(
      <div className={ContTa.contenedorMT}>
        <Navbar />
        <div className={ContTa.contenedorT}>
        <Tableproveedor />
        </div>
      </div>
    );
}
export default Proveedor;
