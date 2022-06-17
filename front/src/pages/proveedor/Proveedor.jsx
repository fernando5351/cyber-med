import React from "react";
import '../../css/contenttabla.css'
import Navbar from "../../components/navegacion/Navbar";
import Tableproveedor from "../../components/table/Tableproveedor";

function Proveedor(){
    return(
      <div className='contenedor-main-tabla'>
        <Navbar />
        <div className='contenedor-tabla'>
        <Tableproveedor />
        </div>
      </div>
    );
}
export default Proveedor;
