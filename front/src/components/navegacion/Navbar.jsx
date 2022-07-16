import React from "react";
import Carrito from "../../icon/Home/carrito.png";
import Nav from "../../css/navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");
  };
  const home = () => {
    navigate("/home");
  };
  const medicinas = () => {
    navigate("/medicinas");
  }
  const empresa = () => {
    navigate ("/empresa")
  }

  return (
    <div className={Nav.contenedorNav}>
      <nav>
        <a onClick={home} className={Nav.btnico}>
          <img className={Nav.logo} src={Carrito} alt="logo cybermed" />
        </a>
        <ul className={Nav.menu}>
          <li>
            <a className={Nav.btnmenu} onClick={home}>
              INICIO
            </a>
          </li>
          <li>
            <a className={Nav.btnmenu} onClick={empresa} >
              PROVEEDORES
            </a>
          </li>
          <li>
            <a className={Nav.btnmenu} onClick={medicinas}>
              MEDICINAS
            </a>
          </li>
          <li>
            <a className={Nav.btnmenu}>AÑADIR</a>
            <ul className={Nav.submenu}>
              <li>
                <a className={Nav.subtnmenu}>USO</a>
              </li>
              <li>
                <a className={Nav.subtnmenu}>CONSUMO</a>
              </li>
              <li>
                <a className={Nav.subtnmenu}>MEDICAMENTO</a>
              </li>
            </ul>
          </li>
          <li>
            <a className={Nav.btnmenu} onClick={logOut}>
              CERRAR SESION
            </a>
          </li>
      
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
