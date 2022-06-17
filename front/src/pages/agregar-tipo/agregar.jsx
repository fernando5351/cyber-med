import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import '../../css/Add-medicines.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
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
                    <table className='centered tbl'>
                        <thead>
                            <tr className='background'>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody className='table'>
                            <>
                                {
                                    consumo.map((consumo) => (
                                        <tr className='background'>
                                            <td>{consumo.id}</td>
                                            <td>{consumo.tipo_consumo}</td>
                                            <td>
                                                <img
                                                className='annadir'
                                                src={Edit}
                                                alt=''
                                                onClick={add} />
                                                <img
                                                className='annadir'
                                                src={Delete}
                                                alt=''
                                                onClick={add} />
                                            </td>
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