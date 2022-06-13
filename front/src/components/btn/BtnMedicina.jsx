import React, { useState, useEffect } from "react";
import '../../css/medicinas.css';
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
            <div className='contenedor-botones'>
                {
                    consumo.map((consumo) => (
                        <a className="waves-effect waves-light btn buttonMed">{ consumo.tipo_consumo }</a>
                    ))
                }
            </div>
        </>
    )
}

export default BtnMedicina;