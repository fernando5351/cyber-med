import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'

function Mod() {
    //validacion de datos de la tabla
    const [consumo, setConsumo] = useState([])


    const api = async () => {
        const data = await fetch('http://localhost:4000/view/tags-products')
        const dataJson = await data.json()
        setConsumo(dataJson)
        console.log(dataJson);
    }

    useEffect(() => {
        api()
    }, [])
    //variable para la navegaciond de rutas
    const navigate = useNavigate();

    //ruta para agregar un nuevo medicamento, esto lleva al formulario tipo consumo
    const add = () => {
        navigate('/medicinas/agregar/categoria')
    }

    //ruta para editar un medicamento, esto lleva al formulario tipo consumo
    const edit = () => {
        navigate('/medicinas/editar/categoria')
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
                                    consumo.map((consumo) => (
                                        <tr key={consumo.id} className={Add.background}>
                                            <td>{consumo.id}</td>
                                            <td>{consumo.tipo_consumo}</td>
                                            <td>
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Edit}
                                                    alt=''
                                                    onClick={edit} />
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Delete}
                                                    alt=''
                                                //onClick={() => onDelete(`${consumo.id}`)}
                                                />
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