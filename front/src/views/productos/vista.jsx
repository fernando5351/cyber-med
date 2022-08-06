import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import vistamed from "../../css/vistamed.module.css";
import imgsubir from "../../icon/Create/subir.png";
import select from "../../css/select.module.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function Vista() {
  const options = [
    { value: "Opcion 1", label: "Opcion 1" },
    { value: "Opcion 2", label: "Opcion 2" },
    { value: "Opcion 3", label: "Opcion 3" },
  ];

  const navigate = useNavigate();

  const update = () => {
    navigate(`/modificaciones}`);
  };
  return (
    <div>
      <Navbar />
      <div className={vistamed.contentPrincipal}>
        <div className={vistamed.contentModificacion}>
          <div className={vistamed.Img}>
            <buton className={vistamed.butonmed}>
              <img className={vistamed.subiricon} src={imgsubir} alt="" />
            </buton>
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
              <div className={vistamed.containerFormMed}>
                <div className={vistamed.caja}>
                  <label id={vistamed.estiloColor}>DESCRIPCION :</label>
                  <input id={vistamed.colorInfo} type="text" />
                </div>
                <div className={select.Caja}>
                  <div className={select.estilo}>
                    <label id={select.titulo}>USO :</label>
                    <Select
                      className={select.Select}
                      isMulti
                      options={options}
                    />
                  </div>
                  <div className={select.estilo}>
                    <label id={select.titulo2}>ADMINISTRACION :</label>
                    <Select options={options} className={select.options} />
                  </div>
                </div>
                <div className={`${vistamed.caja} ${vistamed.estiloBottom}`}>
                  <label id={vistamed.estiloColor}>CANTIDAD :</label>
                  <input id={vistamed.colorInfo} type="text" />
                </div>
              </div>
              <div className={vistamed.containerFormBtn}>
                <button className={vistamed.btnForm}>Cancelar</button>
                <button onClick={update} className={vistamed.btnForm}>Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vista;
