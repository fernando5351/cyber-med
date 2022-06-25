import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import BtnMedicina from "../../components/btn/BtnMedicina";
import med from '../../css/medicinas.module.css'

function Medicinas() {
    return (
        <div>
            <Navbar />

            <div className={med.contenedorPrincipal}>
                <div>
                    <Barranav 
                    titulocont='CLASIFICACION'
                    />
                </div>
                <div className={med.contenedorMedicinas}>
                    <BtnMedicina />
                </div>
            </div>
        </div>
    );
}

export default Medicinas;