import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Agregar from "../../icon/Vista/agregar.png";
import Barra from "../../css/barranav.module.css";
import tabla from "../../css/Add-medicines.module.css";
import Edit from "../../icon/addMed/editar.png";
import Delete from "../../icon/addMed/eliminar.png";
const API = "https://lovely-lace-production.up.railway.app/empresa";

function Tableempresa() {
  const Navigate = useNavigate();

  const Add = () => {
    Navigate("/empresa/crear");
  };

  const editEmpresa = () => {
    Navigate("/empresa/editar");
  };

  const [empresa, setEmpresa] = useState([]);

  const fetchAPI = async () => {
    const data = await fetch(API);
    const dataJson = await data.json();
    console.log(dataJson);
    setEmpresa(dataJson);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className={tabla.containerAdd}>
      <div className={tabla.containerTab}>
        <div className={tabla.containerBtn}>
          <img
            className={Barra.annadir}
            src={Agregar}
            alt="agregar"
            onClick={() => {
              Add();
            }}
          />
        </div>
        <div className={tabla.containerTableE}>
          <table className={tabla.tbl}>
            <thead>
              <tr className={tabla.background}>
                <th>EMPRESA</th>
                <th>DIRECCION</th>
                <th>PRODUCTO</th>
                <th>EMAIL</th>
                <th>TELEFONO</th>
                <th>LOTE</th>
                <th>ACTIVO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <>
                {empresa.map((empresa) => (
                  <tr key={empresa.id} className={tabla.background}>
                    <td>{empresa.nombre_empresa}</td>
                    <td>{empresa.direccion}</td>
                    <td>{empresa.nombre}</td>
                    <td>{empresa.email}</td>
                    <td>{empresa.telefono}</td>
                    <td>{empresa.lote}</td>
                    <td>{empresa.activo}</td>
                    <td>
                      <img
                        className={Barra.annadir}
                        src={Edit}
                        alt=""
                        onClick={() => {
                          editEmpresa();
                        }}
                      />
                      <img className={Barra.annadir} src={Delete} alt="" />
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tableempresa;
