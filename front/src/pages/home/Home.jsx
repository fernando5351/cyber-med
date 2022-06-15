import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import '../../css/home.css'
import Btnhome from '../../components/btn/Btnhome'
import axios from 'axios'

function Home() {
    const loadData = () => {
        axios.get('http://localhost:4000/home/table')
            .then(result => {
                setConsumo(result.data)
            })
    }
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