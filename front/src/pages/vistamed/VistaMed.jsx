import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import "../../css/VistaMed.css";

function Vistamed() {
  return (
    <div className="contenedor-vistamed">
      <Navbar />
      <div className="contenedor-imagen"></div>
      <div className="contenedor-marca"></div>
      <div className="contenedor-descripcion">
        <input
          type="button"
          id="Eliminar"
          value="Eliminar"
          className="Eliminar"
        ></input>
        <input
          type="button"
          id="editar"
          value="Editar"
          className="Editar"
        ></input>
      </div>
    </div>
  );
}
export default Vistamed;
