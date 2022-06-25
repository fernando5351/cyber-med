import React from "react";
import vistamed from '../../css/vistamed.module.css';
import imgsubir from '../../icon/Create/subir.png';
import select from '../../css/select.module.css';


function VistaMedy() {
    return (
      <div className={vistamed.contentPrincipal}>
        <div className={vistamed.contentModificacion}>
          <div className={vistamed.Img}>
            <a className={vistamed.butonmed}>
              <img className={vistamed.subiricon} src={imgsubir} alt="" />
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
              <div className={select.multiSelector}>
                <div className={select.inputField}>
                  <div className={select.contentselect}>
                    <label id={select.colorLetra}>USO :</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className={select.inputSelector}
                      disabled
                    />
                    <span className={select.downArrow}>&#9660;</span>
                  </div>
                  {/* lista despegable */}
                  <div className={select.lista}>
                    <label id={select.fila}>
                      <input
                        className={select.estilochecke}
                        type="checkbox"
                        name=""
                        id={select.estiloChecke}
                      />
                      <span className={select.titulo}>Opcion 1</span>
                    </label>
                  </div>
                  <div className={select.lista}>
                    <label id={select.fila}>
                      <input
                        className={select.estilochecke}
                        type="checkbox"
                        name=""
                        id={select.estiloChecke}
                      />
                      <span className={select.titulo}>Opcion 2</span>
                    </label>
                  </div>
                  <div className={select.lista}>
                    <label id={select.fila}>
                      <input
                        className={select.estilochecke}
                        type="checkbox"
                        name=""
                        id={select.estiloChecke}
                      />
                      <span className={select.titulo}>Opcion 3</span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default VistaMedy;