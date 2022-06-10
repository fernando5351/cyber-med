import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import BtnMedicina from "../../components/btn/BtnMedicina";
import Barranav from '../../components/navegacion/Barranav';
import '../../css/medicinas.css'


function Medicinas() {
    return (
        <div>
            <Navbar />

            <div className="contenedor-principal">
<<<<<<< HEAD
                <div>
                    <Barranav />
                </div>
                <div className="contenedor-medicinas">
                    <BtnMedicina />
                </div>
=======
                <Barranav />
                <BtnMedicina />
>>>>>>> 96ac131965c2a8c87cdc52d5bcda6d40b5ad3907
            </div>
        </div>
    );
}

export default Medicinas;