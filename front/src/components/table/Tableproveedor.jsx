import React, { useState, useEffect } from 'react'; 
import '../../css/table.css';

function Tableproveedor(){
    return(
         <div className='row' id='rowt'>
            <table className='centered' id='tableM'>
                <thead>
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
                <tbody className='tbodycontent'>
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