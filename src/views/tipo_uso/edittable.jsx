import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Add from "../../css/Add-medicines.module.css";
import barraNav from "../../css/barranav.module.css"
import Agregar from '../../icon/Vista/agregar.png'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'

function TableUso() {
  return (
    <div className={Add.containerAdd}>
            <Navbar />
            <div className={Add.containerTab}>
                <div className={Add.containerBtn}>
                    <img
                        className={`${barraNav.annadir} ${Add.annadir}`}
                        src={Agregar}
                        alt=''
                        /* onClick={add} */ />
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
                            <tr  className={Add.background}>
                                <td></td>
                                <td></td>
                                <td>
                                    <img
                                        className={barraNav.annadir}
                                        src={Edit}
                                        alt=''
                                        /* onClick={edit} */ />
                                    <img
                                        className={barraNav.annadir}
                                        src={Delete}
                                        alt=''
                                        /* onClick={() => handleDelete(`${consumo.id}`)} */
                                    />
                                </td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
  );
}

export default TableUso;
