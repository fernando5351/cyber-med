import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import BtnMedicina from "../../components/btn/BtnMedicina";
import btnmedicinas from '../../css/medicinas.module.css'

function Medicinas() {
    return (
        <div>
            <Navbar />

            <div className={btnmedicinas.contenedorPrincipal}>
                <div>
                    <Barranav 
                    titulocont='CLASIFICACION'
                    />
                </div>
                <div className={btnmedicinas.contenedorMedicinas}>
                    <BtnMedicina />
                </div>
            </div>
        </div>
    );
}

export default Medicinas;