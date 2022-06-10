import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import BtnMedicina from "../../components/btn/BtnMedicina";
import Barranav from '../../components/navegacion/Barranav';
import '../../css/medicinas.css'
import { useNavigate } from 'react-router-dom'


function Medicinas() {
    return (
        <div>
            <Navbar />

            <div className="contenedor-principal">
                <div>
                    <Barranav />
                </div>
                <div className="contenedor-medicinas">
                    <BtnMedicina />
                </div>
            </div>
        </div>
    );
}

export default Medicinas;