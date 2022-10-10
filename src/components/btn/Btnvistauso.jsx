import React from "react";
import Btnview from "../../css/vistauso.module.css";
import med from "../../img/login/medicines.jpg";

function Btnvistauso() {
  return (
    <div className={Btnview.contenedorPro}>
      <div className={Btnview.subcontenedorPro}>
        <div className={Btnview.card}>
          <div className={Btnview.cardContent}>
            <img className={Btnview.imgPro} src={med} alt="" />
          </div>
          <div className={Btnview.contentBtn}>
            <button className={Btnview.btnVerM}>VER MAS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Btnvistauso;
