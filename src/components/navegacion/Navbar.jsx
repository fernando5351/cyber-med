import React from "react";
import Carrito from '../../icon/Home/carrito.png';
import '../../css/navbar.css'

function Navbar() {
    return(
         <nav className='indigo  lighten-5'>
           <div class="nav-wrapper">
           <a className='black-text text-darken-4' href="#">
             <img 
             className="logo responsive-img"
             src={Carrito} 
             alt="Logo cybermed" />
             </a>
             <ul id="nav-mobile" class="right">
               <li><a className='black-text text-darken-4' href="#">INICIO</a></li>
               <li><a className='black-text text-darken-4' href="#">MEDICINAS</a></li>
               <li><a className='black-text text-darken-4' href="#">CERRAR SESION</a></li>
             </ul>
           </div>
         </nav>
    );
}

export default Navbar;

