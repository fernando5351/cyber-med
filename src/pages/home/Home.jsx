import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import BtnHome from "../../components/btn/Btnhome";
import '../../css/home.css'

function Home() {
    return(
      <div className="contenedor-home">
           <Navbar />
           <BtnHome />
            <div className="row">
              <table className='centered'>
                       <thead>
                         <tr>
                             <th>Id</th>
                             <th>Nombre</th>
                             <th>Tipo</th>
                             <th>Uso</th>
                             <th>Precio</th>
                             <th>Gramos</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
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
      </div>
           
    );
}  

export default Home;