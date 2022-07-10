import React from "react";
import VistaMedy from "../../components/vistamed/VistaMed";
import Navbar from "../../components/navegacion/Navbar";

const VistaProducto = () => {
  return (
    <div>
      <Navbar />
      <VistaMedy cancel="ELIMINAR" save="EDITAR" />
    </div>
  );
};

export default VistaProducto;
