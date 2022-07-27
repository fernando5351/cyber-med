import React, { useState, useEffect } from "react";
import tabla from "../../css/table.module.css";




function Tableempresa() {

  const [empresa, setEmpresa] = useState([]);

  useEffect (() => {
    const getEmpresa = ()=>{
      fetch ('http://localhost:4000/empresa')
      .then(res=>res.json())
      .then(res=>console.log(res));
    }
    getEmpresa()
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
          
          {empresa.map( empresa =>(
              <tr key={empresa.id}>
                 <th>{empresa.id}</th>
                  <th>{empresa.nombre_empresa}</th>
                  <th>{empresa.direccion}</th>
                  <th>{empresa.nombre}</th>
                  <th>{empresa.email}</th>
                  <th>{empresa.telefono}</th>
                  <th>{empresa.lote}</th>
                  <th>{empresa.activo}</th>   
             </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default Tableempresa;
