import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../icon/Vista/retroceder.png"
import Agregar from "../../icon/Vista/agregar.png"
import Barra from "../../css/barranav.module.css";
import tabla from "../../css/Add-medicines.module.css";
import Edit from "../../icon/addMed/editar.png";
import Delete from "../../icon/addMed/eliminar.png";


function TableLote(){

    const Navigate = useNavigate();

    const backTableE = () => {
        Navigate("/empresa");
    }

    const addLote = () => {
        Navigate("/empresa/lote/crear-lote")
    }

    const editLote = () => {
        Navigate("/empresa/lote/editar-lote")
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
                        backTableE()
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
                            <th>ID</th>
                            <th>INGRESO</th>
                            <th>VENCIMIENTO</th>
                            <th>DETALLE</th>
                            <th>CANTIDAD</th>
                            <th>PRECIO</th>
                            <th>EMPRESA</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={tabla.background}>
                            <td>1</td>
                            <td>2022-10-11</td>
                            <td>2023-02-14</td>
                            <td>producto para la calentura</td>
                            <td>200</td>
                            <td>1000</td>
                            <td>2</td>
                            <td>
                                <img
                                className={Barra.annadir}
                                src={Edit}
                                alt=""
                                 onClick={() => {
                                    editLote();
                                }} 
                                />
                                <img className={Barra.annadir} 
                                src={Delete} 
                                alt=""
                                /* onClick={()=>{
                                  Deleteproduct(products.id);
                                }} */ 
                                />
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default TableLote;