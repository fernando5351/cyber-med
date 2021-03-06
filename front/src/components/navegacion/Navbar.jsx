import React from "react";
import Carrito from '../../icon/Home/carrito.png';
import Nav from'../../css/navbar.module.css'
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
      <div className={Nav.contenedorNav}>
      <nav>
          <a onClick={home} className={Nav.btnico}>
            <img 
            className={Nav.logo}
            src={Carrito} 
            alt='logo cybermed' />
          </a>
          <ul className={Nav.listado}>
            <li><a className={Nav.btnmenu} onClick={home}>INICIO</a></li>
            <li><a className={Nav.btnmenu} onClick={medicinas}>MEDICINAS</a></li>
            <li><a className={Nav.btnmenu} onClick={logOut}>CERRAR SESION</a></li>
          </ul>
      </nav>
 </div>
    );
}

export default Navbar;

