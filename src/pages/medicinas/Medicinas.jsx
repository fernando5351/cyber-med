import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import BtnMedicina from "../../components/btn/BtnMedicina";
import Barranav from '../../components/navegacion/Barranav';
import '../../css/medicinas.css';


function Medicinas() {
    return(
        <div className="contenedor-medicinas">
            <Navbar />
            
            <div className="contenedor-principal">
            <Barranav />
                    <BtnMedicina />
            </div>
        </div>
    );
}

export default Medicinas;