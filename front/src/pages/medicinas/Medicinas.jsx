import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import BtnMedicina from "../../components/btn/BtnMedicina";
<<<<<<< HEAD
import btnmedicinas from '../../css/medicinas.module.css'
=======
import med from '../../css/medicinas.module.css'
>>>>>>> abygail

function Medicinas() {
    return (
        <div>
            <Navbar />

<<<<<<< HEAD
            <div className={btnmedicinas.contenedorPrincipal}>
=======
            <div className={med.contenedorPrincipal}>
>>>>>>> abygail
                <div>
                    <Barranav 
                    titulocont='CLASIFICACION'
                    />
                </div>
<<<<<<< HEAD
                <div className={btnmedicinas.contenedorMedicinas}>
=======
                <div className={med.contenedorMedicinas}>
>>>>>>> abygail
                    <BtnMedicina />
                </div>
            </div>
        </div>
    );
}

export default Medicinas;