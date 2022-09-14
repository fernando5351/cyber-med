import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'

function Mod() {
    //validacion de datos de la tablafront/src/pages/agregar-tipo/agregar.jsx
    const [consumo, setConsumo] = useState([])
    const [update, setUpdate] = useState(false)

    const api = async () => {
        const data = await fetch('http://localhost:4000/view/tags-products')
        const dataJson = await data.json()
        setConsumo(dataJson)
        console.log(dataJson);
    }

    useEffect(() => {
        api()
        setUpdate(false)
    }, [update])
    //variable para la navegaciond de rutas
    const navigate = useNavigate();

    //ruta para agregar un nuevo medicamento, esto lleva al formulario tipo consumo
    const add = () => {
        navigate('/medicinas/agregar/categoria/consumo')
    }

    //ruta para editar un medicamento, esto lleva al formulario tipo consumo
    const handleEdit = ( id ) => {
        navigate(`/medicinas/editar/categoria/consumo`)
        const i = id
        console.log(i)
    }
    //eliminar un registro
    const handleDelete = (id) => {
        const RequestInit = {
            method: 'delete'
          }
          fetch(`http://localhost:4000/tipo_consumo/${id}`, RequestInit)
          .then( res => res.json())
          .then( res => console.log(res))

          setUpdate(true)
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
                                    consumo.map((getConsumo) => (
                                        <tr key={getConsumo.id} className={Add.background}>
                                            <td>{getConsumo.id}</td>
                                            <td>{getConsumo.tipo_consumo}</td>
                                            <td>
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Edit}
                                                    alt=''
                                                    onClick={ () => {
                                                        handleEdit(`${getConsumo.id}`)
                                                    }} />
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Delete}
                                                    alt=''
                                                    onClick={() => handleDelete(`${getConsumo.id}`)}
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

export default Mod;
