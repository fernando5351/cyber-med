import React, { useContext, useState, useEffect, createContext } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './ProductContextProvider'

export const Context = createContext()

function Table(props) {
    const { products, deleteProduct, findProduct } = useContext(ProductContext)

    const [edit, setEdit] = useState()
    const navigate = useNavigate()

    const DeleteProduct = (id) => {
        deleteProduct(id)
        setEdit()
    }

    useEffect(() => {
        deleteProduct()
    }, [deleteProduct])
    
    const EditProduct = (id) => {
        const res = id
        navigate("/medicinas/editar-consumo")
        return res;
    }

    return (
        <>
            <Context.Provider
                value={{
                    EditProduct,
                    edit,
                    setEdit
                }}
            >
                {props.children}
            </Context.Provider>
            <Navbar />
            <div className={Add.containerAdd}>
                <div className={Add.containerTab}>
                    <div className={Add.containerBtn}>
                        <img
                            className={`${barraNav.annadir} ${Add.annadir}`}
                            src={Agregar}
                            alt=''
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
                                                    onClick={(e) => {
                                                        EditProduct(`${products.id}`)
                                                    }}
                                                />
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Delete}
                                                    alt=''
                                                    onClick={() => {
                                                        DeleteProduct(`${products.id}`)
                                                    }}
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
        </>
    )
}

export default Table;