import React from "react";
import Navbar from "../navegacion/Navbar";
import Body from "./body";
import Header from "./header";
import Footer from "./footer";
import Form from '../../css/formtipouso.module.css'

function Formuso() {
  return (
    <div className={Form.contentUso}>
      <Navbar />
      <div className={Form.containerUso}>
        <div className={Form.contenedorPrincipalUso}>
          {/* estructura del formulario, dentro de aca debe estar los demas componentes */}
          <Header form='Agregar ' />
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Formuso; 