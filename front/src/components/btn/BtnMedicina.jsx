import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import btnmedicinas from '../../css/medicinas.module.css';
=======
import med from '../../css/medicinas.module.css';
>>>>>>> abygail
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
<<<<<<< HEAD
            <div className={btnmedicinas.contenedorBotones}>
                {
                    consumo.map((consumo) => (
                        <a className={btnmedicinas.buttonMed}>{ consumo.tipo_consumo }</a>
=======
            <div className={med.contenedorBotones}>
                {
                    consumo.map((consumo) => (
                        <button href="#" className={`${med.btn} ${med.buttonMed}`}>{ consumo.tipo_consumo }</button>
>>>>>>> abygail
                    ))
                }
            </div>
        </>
    )
}

export default BtnMedicina;