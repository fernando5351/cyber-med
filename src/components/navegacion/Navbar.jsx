import React from "react";
import Carrito from '../../icon/Home/carrito.png';
import '../../css/navbar.css'

function Navbar() {
    return(
         <nav className='indigo  lighten-5 menu'>
           <div class="nav-wrapper">
           <a className='waves-effect waves-light btnico' href="#">
             <img 
             className="logo"
             src={Carrito} 
             alt="Logo cybermed" />
             </a>
             <ul id="nav-mobile" class="right">
               <li><a className='black-text text-darken-4 btnmenu' href="#">INICIO</a></li>
               <li><a className='black-text text-darken-4 btnmenu' href="#">MEDICINAS</a></li>
               <li><a className='black-text text-darken-4 btnmenu' href="#">CERRAR SESION</a></li>
             </ul>
           </div>
         </nav>
    );
}

export default Navbar;

