import React from 'react';
import '../../css/home.css'
import Lupita from '../../icon/Home/lupa.png'; 

function BtnHome() {
   return(
      <div className='contenedor-btnhome'>
           <div className='input-fiel col s4  contenedor'>
           <a class='waves-effect waves-light btn-large Btnn'>TIPO</a>
           <a class='waves-effect waves-light btn-large Btnn'>NOMBRE</a>
           <a class='waves-effect waves-light btn-large Btnn'>USO</a>
           <a class='waves-effect waves-light btn-large'>
               <img
               className='responsive-img icono'
               src={Lupita}
               alt='' />
           </a>
           </div>
       
      </div>
   );
}

export default BtnHome;