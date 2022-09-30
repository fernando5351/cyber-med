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
  };
  const empresa = () => {
    navigate("/empresa");
  };
  const med = () => {
    navigate("/medicinas/crear");
  };
  const uso = () => {
    navigate("/crear")
  };
  const consumo = () => {
    navigate("/medicinas/agregar/categoria/consumo")
  }

  return (
    <div className={Nav.contenedorNav}>
      <nav>
        <button onClick={home} className={Nav.btnico}>
          <img className={Nav.logo} src={Carrito} alt="logo cybermed" />
        </button>
        <ul className={Nav.menu}>
          <li>
            <button className={Nav.btnmenu} onClick={home}>
              INICIO
            </button>
          </li>
          <li>
            <button className={Nav.btnmenu} onClick={empresa}>
              PROVEEDORES
            </button>
          </li>
          <li>
            <button className={Nav.btnmenu} onClick={medicinas}>
              MEDICINAS
            </button>
          </li>
          <li>
            <button className={Nav.btnmenu}>AÑADIR</button>
            <ul className={Nav.submenu}>
              <li>
                <button onClick={uso} className={Nav.subtnmenu}>USO</button>
              </li>
              <li>
                <button onClick={consumo} className={Nav.subtnmenu}>CONSUMO</button>
              </li>
              <li>
                <button className={Nav.subtnmenu} onClick={med}>MEDICAMENTO</button>
              </li>
            </ul>
          </li>
          <li>
            <button className={Nav.btnmenu} onClick={logOut}>
              CERRAR SESION
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
