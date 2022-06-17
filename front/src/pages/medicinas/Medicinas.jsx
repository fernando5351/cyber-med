import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import BtnMedicina from "../../components/btn/BtnMedicina";
import '../../css/medicinas.css'

function Medicinas() {
    return (
        <div>
            <Navbar />

            <div className="contenedor-principal">
                <div>
                    <Barranav 
                    titulocont='CLASIFICACION'
                    />
                </div>
                <div className="contenedor-medicinas">
                    <BtnMedicina />
                </div>
            </div>
        </div>
    );
}

export default Medicinas;