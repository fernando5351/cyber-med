import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import '../../css/Add-medicines.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Mod() {
    const [consumo, setConsumo] = useState([])
    const loadData = () => {
        axios.get('http://localhost:4000/medicinas')
            .then(result => {
                setConsumo(result.data)
            })
    }
    useEffect(loadData, [])
    const navigate = useNavigate();
    const add = () => {
        navigate('/medicinas/agregar/categoria')
    }
    return (
        <div className='container-add'>
            <Navbar />
            <div className="container-tab">
                <div className="container-btn">
                    <img
                        className='annadir'
                        src={Agregar}
                        alt=''
                        onClick={add} />
                </div>
                <div className="container-table">
                    <table className='centered'>
                        <thead className='border-table'>
                            <tr className='background'>
                                <th className='border-table'>ID</th>
                                <th>NOMBRE</th>
                                <th className='border-table-rig'>ACCION</th>
                            </tr>
                        </thead>
                        <tbody className='table'>
                            <>
                                {
                                    consumo.map((consumo) => (
                                        <tr className='background'>
                                            <td>{consumo.id}</td>
                                            <td>{consumo.tipo_consumo}</td>
                                            <td></td>
                                        </tr>
                                    ))
                                }
                            </>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Mod