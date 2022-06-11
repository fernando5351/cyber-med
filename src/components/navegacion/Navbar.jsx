import React from "react";
import Carrito from '../../icon/Home/carrito.png';
import '../../css/navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const logOut  = () => {
    navigate('/')
  }
  const home = () =>{
    navigate('/home')
  }
  const medicinas = () =>{
    navigate('/medicinas')
  }
    return(
         <nav className='indigo  lighten-5 menu'>
           <div class="nav-wrapper">
           <a className='waves-effect waves-light btnico'>
             <img 
             className="logo"
             src={Carrito} 
             alt="Logo cybermed" />
             </a>
             <ul id="nav-mobile" class="right">
               <li><a className='black-text text-darken-4 btnmenu' onClick={home} >INICIO</a></li>
               <li><a className='black-text text-darken-4 btnmenu' onClick={medicinas} >MEDICINAS</a></li>
               <li><a className='black-text text-darken-4 btnmenu' onClick={logOut} >CERRAR SESION</a></li>
             </ul>
           </div>
         </nav>
    );
}

export default Navbar;

