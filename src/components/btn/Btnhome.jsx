import React from "react";
import Lupita from "../../icon/Home/lupa.png";
import BtnHome from "../../css/btnhome.module.css";

function Btnhome() {
  return (
    <form className={BtnHome.contentMain}>
      <div className={BtnHome.content}>
        <select className={BtnHome.selecttype}>
          <option className={BtnHome.options} value="0" disabled>
            ADMINISTRACION
          </option>
          <option className={BtnHome.options} value="1">
            Option 1
          </option>
          <option className={BtnHome.options} value="2">
            Option 2
          </option>
          <option className={BtnHome.options} value="3">
            Option 3
          </option>
        </select>
      </div>
      <div className={BtnHome.content}>
        <input placeholder="Nombre" className={BtnHome.nombreIn} type="text" />
      </div>
      <div className={BtnHome.content}>
        <select className={BtnHome.selectuse}>
          <option className={BtnHome.options} value="0" disabled>
            USO
          </option>
          <option className={BtnHome.options} value="1">
            Option 1
          </option>
          <option className={BtnHome.options} value="2">
            Option 2
          </option>
          <option className={BtnHome.options} value="3">
            Option 3
          </option>
        </select>
      </div>
      <div className={BtnHome.content}>
        <button className={BtnHome.Btnn}>
          <img className={BtnHome.lupa} src={Lupita} alt="" />
        </button>
      </div>
    </form>
  );
}

export default Btnhome;
