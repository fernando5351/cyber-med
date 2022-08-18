import React, { useState, useEffect } from 'react'; 
import tabla from '../../css/table.module.css';

function Tableproveedor() {
    return(
        <div className={tabla.row} >
        <table className={tabla.tableM}>
                 <thead className={tabla.cabeza}>
                   <tr>
                       <th>ID</th>
                       <th>EMPRESA</th>
                       <th>DIRECCION</th>
                       <th>CONTACTO</th>
                       <th>EMAIL</th>
                       <th>PRODUCTO</th>
                       <th>LOTE</th>
                       <th>ACTIVO</th>
                   </tr>
                 </thead>
                 <tbody className={tabla.contenido}>
                                            <tr>
                                              <td>#</td>
                                              <td>#</td>
                                              <td>#</td>
                                              <td>#</td>
                                              <td>#</td>
                                              <td>#</td>
                                              <td>#</td>
                                              <td>#</td>
                                            </tr>
                 </tbody>
        </table>            
      </div>
    );
}

export default Tableproveedor;