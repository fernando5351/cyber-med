import React, { useState, useEffect } from "react";
import med from '../../css/medicinas.module.css';
import axios from 'axios'

function BtnMedicina() {
    const [consumo, setConsumo] = useState([])
    const loadData = () => {
        axios.get('http://localhost:4000/medicinas')
            .then(result => {
                setConsumo(result.data)
            })
    }
    useEffect(loadData, [])
    return (
        <>
            <div className={med.contenedorBotones}>
                {
                    consumo.map((consumo) => (
                        <button href="#" className={`${med.btn} ${med.buttonMed}`}>{ consumo.tipo_consumo }</button>
                    ))
                }
            </div>
        </>
    )
}

export default BtnMedicina;