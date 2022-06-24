import React, { useState, useEffect } from "react";
import btnmedicinas from '../../css/medicinas.module.css';
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
            <div className={btnmedicinas.contenedorBotones}>
                {
                    consumo.map((consumo) => (
                        <a className={btnmedicinas.buttonMed}>{ consumo.tipo_consumo }</a>
                    ))
                }
            </div>
        </>
    )
}

export default BtnMedicina;