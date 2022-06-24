import React from "react";
import vistamed from '../../css/vistamed.module.css';
import imgsubir from '../../icon/Create/subir.png';

function VistaMedy() {
    return(
        <div className={vistamed.contentPrincipal}>
            <div className={vistamed.contentModificacion}>
        <div className={vistamed.Img}>
        <a className={vistamed.butonmed}>
            <img className={vistamed.subiricon} 
            src={imgsubir} 
            alt="" />
          </a>
        </div>
        <div className={vistamed.Dato}>
            <form id={vistamed.estiloForm}>
            <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>PRECIO :</label>
                <input id={vistamed.estilo} type="text" />
            </div>
            <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>GRAMO :</label>
                <input id={vistamed.estilo} type="text" />
            </div>
            <div className={vistamed.contenedorLinea}>
                <label id={vistamed.color}>MARCA :</label>
                <input id={vistamed.estilo} type="text" />
            </div>
            </form>
        </div>
      </div>
      <div className={vistamed.contentInfo}>
        <div className={vistamed.Info}>
            <form id={vistamed.formEstilo}>
                <div className={vistamed.caja}>
                    <label id={vistamed.estiloColor}>DESCRIPCION :</label>
                    <input id={vistamed.colorInfo} type="text" />
                </div>
            </form>
        </div>
      </div>
        </div>
    );
}

export default VistaMedy;