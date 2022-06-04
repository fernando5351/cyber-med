import React from "react";
import Carrito from '../../icon/Home/carrito.png';
import '../../css/login.css'

function Navbar(props) {
    return(
     <div>
         <nav>
           <div class="nav-wrapper  menucont">
             <img 
             className="logo"
             src={Carrito} 
             alt="Logo cybermed" />
             <ul id="nav-mobile" class="right hide-on-med-and-down">
               <li><a className='black-text text-darken-4' href="badges.html">INICIO</a></li>
               <li><a className='black-text text-darken-4' href="collapsible.html">MEDICINAS</a></li>
               <li><a className='black-text text-darken-4' href="sass.html">CERRAR SESION</a></li>
             </ul>
           </div>
         </nav>
     </div>
    );
}

export default Navbar;

//<a href="#" class="brand-logo">Logo</a>