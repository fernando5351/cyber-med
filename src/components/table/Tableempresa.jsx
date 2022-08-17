import React, { useState, useEffect } from "react";
import tabla from "../../css/table.module.css";
const API = "http://localhost:4000";

function Tableempresa() {

  const [empresa,setEmpresa] = useState([]);

  const fetchAPI = async () =>{
    const data = await fetch (`${API}/view/empresa`)
    const dataJson = await data.json();
    console.log(dataJson);
    setEmpresa(dataJson);
  }

  useEffect(()=> {
    fetchAPI()
  },[])


  return( 
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
          </tr>
        </thead>
        <tbody className={tabla.contenido}>
          
          <>
          
          {
            empresa.map((empresa, index)=>(
              <tr key={empresa.id}  className={tabla.td} >
                  <td>{empresa.id}</td>
                  <td>{empresa.nombre_empresa}</td>
                  <td>{empresa.direccion}</td>
                  <td>{empresa.nombre}</td>
                  <td>{empresa.email}</td>
                  <td>{empresa.telefono}</td>
                  <td>{empresa.lote}</td>
                  <td>{empresa.activo}</td>
              </tr>
            ))
          }
         
          </>


        </tbody>
      </table>
    </div>
  );
}

export default Tableempresa;
