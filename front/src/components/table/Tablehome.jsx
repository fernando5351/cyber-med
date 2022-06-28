import React, { useState, useEffect } from "react";
import tabla from "../../css/table.module.css";
import axios from "axios";

function TableHome() {
  const [productos, SetProductos] = useState([]);
  const loadData = () => {
    axios.get("http://localhost:4000/productos").then((result) => {
      SetProductos(result.data);
    });
  };
  useEffect(loadData, []);
  return (
    <div className={tabla.row}>
      <table className={tabla.tableM}>
        <thead className={tabla.cabeza}>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>ADMINISTRACION</th>
            <th>USO</th>
            <th>PRECIO</th>
            <th>GRAMOS</th>
            <th>CADUCIDAD</th>
          </tr>
        </thead>
        <tbody className={tabla.contenido}>
          <>
            {productos.map((productos) => (
              <tr className={tabla.td}>
                <td>{productos.id}</td>
                <td>{productos.nombre}</td>
                <td>{productos.tipo_consumo}</td>
                <td>{productos.tipo_uso}</td>
                <td>{productos.precios}</td>
                <td>{productos.cant_gramos}</td>
                <td>30/16/2090</td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default TableHome;
