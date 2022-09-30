import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './arbol_info/ProductContextProvider'

function Table() {
    const { products, deleteProduct, findProduct, editProduct } = useContext(ProductContext)

    const navigate = useNavigate()

    const DeleteProduct = (id) => {
        deleteProduct(id)
        //console.log(`producto eliminado ${id}`);
    }

    const [productData, setProductData] = useState()

    useEffect(() => {
        if (editProduct) setProductData(editProduct);
        localStorage.setItem('array', JSON.stringify(productData))
      }, [editProduct, productData]);

    const EditProduct = (id) => {
        findProduct(id);
        setTimeout( () => {
            navigate('/medicinas/editar/categoria/consumo')
        }, 100)
    };

    const add = () => {
        navigate('/medicinas/crear-consumo')
    }

    return (
        <>
            <Navbar />
            <div className={Add.containerAdd}>
                <div className={Add.containerTab}>
                    <div className={Add.containerBtn}>
                        <img
                            className={`${barraNav.annadir} ${Add.annadir}`}
                            src={Agregar}
                            alt=''
                            onClick={() => {
                                add()
                            }}
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
                                                        EditProduct(products.id)
                                                        e.preventDefault()
                                                    }}
                                                />
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Delete}
                                                    alt=''
                                                    onClick={() => {
                                                        DeleteProduct(products.id)
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