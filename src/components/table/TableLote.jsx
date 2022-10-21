import React, {useState,useEffect,useContext} from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../icon/Vista/retroceder.png"
import Agregar from "../../icon/Vista/agregar.png"
import Barra from "../../css/barranav.module.css";
import tabla from "../../css/Add-medicines.module.css";
import Edit from "../../icon/addMed/editar.png";
import Delete from "../../icon/addMed/eliminar.png";
import {ProductContextLote} from '../../views/form-lote/arbol_info/ProductContextprovider';


function TableLote(){

    
    const {products, deleteProduct, findProduct, producEdition} = useContext(ProductContextLote);

    const Navigate = useNavigate();

    const DeleteProduct = (id) => {
        deleteProduct(id)
    }

    const [productData, setProductData] = useState()

    useEffect(()=>{
        if(producEdition) setProductData (producEdition)
        localStorage.setItem('lote',JSON.stringify(productData));
    },[producEdition,productData])

    const backTable = () => {
        Navigate("/empresa");
    }

    const addLote = () => {
        Navigate("/empresa/lote/crear-lote")
    }

    const editLote = (id) => {
        findProduct(id);
        setTimeout(()=>{
         Navigate("/empresa/lote/editar-lote")
        },100)  
       
    }

    return(
        <div className={tabla.containerAdd}>
            <div className={tabla.containerTab}>
                <div className={tabla.containerBtn}>
                    <img 
                    className={Barra.back} 
                    alt="" 
                    src={Back}
                    onClick={() =>{
                        backTable()
                    }}
                    />
                    <img 
                    className={Barra.annadir} 
                    alt="" 
                    src={Agregar}
                    onClick={() =>{
                        addLote()
                    }}
                    />
                </div>
                <div className={tabla.containerTableE}>
                    <table className={tabla.tbl}>
                    <thead>
                        <tr className={tabla.background}>
                            <th>INGRESO</th>
                            <th>VENCIMIENTO</th>
                            <th>DETALLE</th>
                            <th>CANTIDAD</th>
                            <th>PRECIO</th>
                            <th>EMPRESA</th>
                            <th>ACTIVO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                        <tbody>
                            <>
                            {products.map((products)=>(
                                <tr key={products.id} className={tabla.background}>
                                    <td>{products.fecha_ingreso}</td>
                                    <td>{products.fecha_vencimiento}</td>
                                    <td>{products.detalle_producto}</td>
                                    <td>{products.cantidad}</td>
                                    <td>{products.precio_producto}</td>
                                    <td>{products.nombre_empresa}</td>
                                    <td>{products.activo}</td>
                                    <td>
                                        <img 
                                            className={Barra.annadir}
                                            src={Edit} 
                                            alt=""
                                            onClick={()=>{
                                                editLote(products.id);
                                            }} 
                                        />
                                        <img 
                                            className={Barra.annadir}
                                            src={Delete}
                                            alt="" 
                                            onClick={()=>{
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
        </div>
    )
}
export default TableLote;