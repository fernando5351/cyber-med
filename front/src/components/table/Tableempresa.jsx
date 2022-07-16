import React, { useState, useEffect } from "react";
import tabla from "../../css/table.module.css";
import axios from "axios";

function Tableempresa() {
  const [empresa, SetEmpresa] = useState([]);
  const loadData = () => {
    axios.get("http://localhost:4000/table/empresas").then((result) => {
      SetEmpresa(result.data);
    });
  };
  useEffect(loadData, []);
  return (
    <div className={tabla.row}>
      <table className={tabla.tableM}>
        <thead className={tabla.cabeza}>
          <tr>
            <th>ID</th>
            <th>EMPRESA</th>
            <th>DIRECCION</th>
            <th>PRODUCTO</th>
            <th>EMAIL</th>
            <th>TELEFONO</th>
            <th>LOTE</th>
            <th>ACTIVO</th>
            {/* ad */}
          </tr>
        </thead>
        <tbody className={tabla.contenido}>
          <>
            {empresa.map((empresa) => (
              <tr className={tabla.td}>
                <td>{empresa.id}</td>
                <td>{empresa.nombre_empresa}</td>
                <td>{empresa.direccion}</td>
                <td>{empresa.nombre}</td>
                <td>{empresa.email}</td>
                <td>{empresa.telefono}</td>
                <td>{empresa.lote}</td>
                <td>{empresa.activo}</td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default Tableempresa;
