import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import VistaMedy from '../../components/vistamed/VistaMed.jsx';

function Modificacionmed() {
  return (
    <div>
      <Navbar />
      <VistaMedy 
      cancel='CANCELAR'
      save='GUARDAR'
      />
    </div>
  );
};

export default Modificacionmed;
