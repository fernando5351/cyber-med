import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import med from "../../css/medicinas.module.css";
import Btnvistauso from "../../components/btn/Btnvistauso";

function Medicinas() {
  return (
    <div>
      <Navbar />

      <div className={med.contenedorPrincipal}>
        <div className={med.conteneroClass}>
          <Barranav title="Medicinas" />
        </div>
        <div className={med.contenedorMedicinas}>
          <Btnvistauso />
          <Btnvistauso />
          <Btnvistauso />
          <Btnvistauso />
          <Btnvistauso />
          <Btnvistauso />
          <Btnvistauso />
          <Btnvistauso />
        </div>
      </div>
    </div>
  );
}

export default Medicinas;
