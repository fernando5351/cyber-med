import React, { useState, useEffect } from 'react'; 
import '../../css/table.css';
import axios from 'axios';

function TableHome(){
    const [productos, SetProductos]= useState([])
  const loadData = () =>{
    axios.get('http://localhost:4000/productos')
          .then(result =>{
            SetProductos(result.data)
          })
  }
  useEffect(loadData,[])
    return(
         <div className='row' id='rowt'>
           <table className='centered' id='tableM'>
                    <thead>
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
                    <tbody id='tbodycontent'>
                                        <>
                                           {
                                             productos.map((productos) => (
                                               <tr className='home'>
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
    );
}

export default TableHome;