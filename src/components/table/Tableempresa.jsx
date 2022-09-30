import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Agregar from "../../icon/Vista/agregar.png";
import Barra from "../../css/barranav.module.css";
import tabla from "../../css/table.module.css";
const API = "https://lovely-lace-production.up.railway.app/empresa";

function Tableempresa() {

  const Navigate = useNavigate();

  const Add = ()=>{
    Navigate("/empresa/crear")
  }

  const [empresa,setEmpresa] = useState([]);

  const fetchAPI = async () =>{
    const data = await fetch (API)
    const dataJson = await data.json();
    console.log(dataJson);
    setEmpresa(dataJson);
  } 

  useEffect(()=> {
    fetchAPI()
  },[])
  
  
  return( 
    
    <div className>
    <img
      className={Barra.annadir}
      src={Agregar}
      alt="agregar"
      onClick={Add}
    />
      <div className={tabla.row}>
      <table className={tabla.tableM}>
        <thead className={tabla.cabeza}>
          <tr>
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
            empresa.map((empresa)=>(
              <tr key={empresa.id}  className={tabla.td} >
               
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
  </div>
    
    
  );
}

export default Tableempresa;
