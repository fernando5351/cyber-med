import React from "react";
import Navbar from '../../components/navegacion/Navbar'
import Agregar from '../../icon/Vista/agregar.png'
import barraNav from '../../css/barranav.module.css'
import Add from '../../css/Add-medicines.module.css'
import Edit from '../../icon/addMed/editar.png'
import Delete from '../../icon/addMed/eliminar.png'
import { useNavigate } from 'react-router-dom'

function TableUso() {
  const navigate = useNavigate();

  const add = () => {
    navigate("/crear");
  };
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
                                    
                                        <tr  className={Add.background}>
                                            <td>1</td>
                                            <td>oral</td>
                                            <td>
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Edit}
                                                    alt=''
                                                   
                                                />
                                                <img
                                                    className={barraNav.annadir}
                                                    src={Delete}
                                                    alt=''
                                                    
                                                />
                                            </td>
                                        </tr>
                                    
                                </>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
  );
}

export default TableUso;
