import React, { useContext } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './ProductContextProvider'

function Mod() {
    //validacion de datos de la tablafront/src/pages/agregar-tipo/agregar.jsx
    const { products } = useContext(ProductContext)
    console.log(products)
    //variable para la navegaciond de rutas
    const navigate = useNavigate();

    //ruta para agregar un nuevo medicamento, esto lleva al formulario tipo consumo
    const add = () => {
        navigate('/medicinas/categoria/consumo')
    }

    //ruta para editar un medicamento, esto lleva al formulario tipo consumo
    const edit = () => {
        navigate("/medicinas/categoria/consumo")
    }

    //eliminar un registro
    const handleDelete = (id) => {
        const RequestInit = {
            method: 'delete'
        }
        fetch(`http://localhost:4000/tipo_consumo/${id}`, RequestInit)
            .then(res => res.json())
            .then(res => console.log(res))
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
                        onClick={add}
                    />
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
                                {products.map((products) => (
                                    <tr key={products.id} className={Add.background}>

                                        <td>{products.id}</td>
                                        <td>{products.tipo_consumo}</td>
                                        <td>
                                            <img
                                                className={barraNav.annadir}
                                                src={Edit}
                                                alt=''
                                                onClick={edit}
                                            />
                                            <img
                                                className={barraNav.annadir}
                                                src={Delete}
                                                alt=''
                                                onClick={() => handleDelete(`${products.id}`)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Mod; 