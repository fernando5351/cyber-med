import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'
const API = "http://localhost:4000";

function Mod() {
    const [body, setBody] = useState([])

    const fetchAPI = async () => {
        const data = await fetch(`${API}/view/tags-products`)
        const dataJson = await data.json()
        console.log(dataJson)
        setBody(dataJson)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    const navigate = useNavigate();
    const add = () => {
        navigate('/medicinas/agregar/categoria')
    }
    return (
        <div className={Add.containerAdd}>
            <Navbar />
            <div className={Add.containerTab}>
                <div className={Add.containerBtn}>
                    <img
                        className={`${barraNav.annadir} ${Add.annadir}`}
                        src={Agregar}
                        alt=''
                        onClick={add} />
                </div>
                <div className={Add.containerTable}>
                    <table className={Add.tbl}>
                        <thead>
                            <tr className={Add.background}>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {
                                    body.map((tags, index) => (
                                        <tr key={tags.id} className={Add.background}>
                                            <td>{tags.id}</td>
                                            <td>{tags.tipo_consumo}</td>
                                            <td>
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Edit}
                                                    alt=''
                                                    onClick={add} />
                                                <img
                                                    className={barraNav.annadir}
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