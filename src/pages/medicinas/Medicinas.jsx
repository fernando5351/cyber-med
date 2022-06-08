import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Botones from "../../components/btnmedicinas/Botones";
import '../../css/medicinas.css';


function Medicinas() {
    return(
        <div className="contenedor-medicinas">
            <Navbar />

            <div className="contenedor-principal">
                
                    <Botones />
            </div>
        </div>
    );
}

export default Medicinas;