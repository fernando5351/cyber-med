import React, { useState, useEffect } from "react";
import Navbar from "../../components/navegacion/Navbar";
import '../../css/home.css'
import Btnhome from '../../components/btn/Btnhome'
import axios from "axios";

function Home() {
  const [productos, SetProductos]= useState([])
  const loadData = () =>{
    axios.get('http://localhost:4000/productos')
          .then(result =>{
            SetProductos(result.data)
          })
  }
  useEffect(loadData,[])
    return(
      <div className="contenedor-home">
           <Navbar />
           <Btnhome />
            <div className="row">
              <table className='centered tableM'>
                       <thead>
                         <tr>
                             <th>ID</th>
                             <th>NOMBRE</th>
                             <th>ADMINISTRACION</th>
                             <th>USO</th>
                             <th>PRECIO</th>
                             <th>GRAMOS</th>
                         </tr>
                       </thead>
                       <tbody className="table">
                                           <>
                                              {
                                                productos.map((productos) => (
                                                  <tr className="home">
                                                    <td>{productos.id}</td>
                                                    <td>{productos.nombre}</td>
                                                    <td>{productos.tipo_consumo}</td>
                                                    <td>{productos.tipo_uso}</td>
                                                    <td>{productos.precios}</td>
                                                    <td>{productos.cant_gramos}</td>
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

export default Home;