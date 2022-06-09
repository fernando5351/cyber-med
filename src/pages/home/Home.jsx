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
              <table className='centered tableM'>
                       <thead>
                         <tr>
                             <th>ID</th>
                             <th>NOMBRE</th>
                             <th>TIPO</th>
                             <th>USO</th>
                             <th>PRECIO</th>
                             <th>GRAMOS</th>
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