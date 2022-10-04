import React, { useState, useEffect } from "react";
import tabla from "../../css/table.module.css";
const API = "https://lovely-lace-production.up.railway.app/products";

function TableHome() {
  const [productos, setProductos] = useState([]);

  const fetchAPI = async () => {
    const data = await fetch(API);
    const getData = await data.json();
    console.log(getData);
    setProductos(getData);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className={tabla.row}>
      <table className={tabla.tableM}>
        <thead className={tabla.cabeza}>
          <tr>
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
