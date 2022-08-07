import React from "react";
import Navbar from "../../components/navegacion/Navbar";
import Form from "../../css/formtipouso.module.css";

function EditarUso() {
  return (
    <div className={Form.contentUso}>
      <Navbar />
      <div className={Form.containerUso}>
        <div className={Form.contenedorPrincipalUso}>
          <div className={Form.textoUso}>
            <h1>Editar Tipo de Uso</h1>
          </div>
          <div className={Form.body}>
            <form className={Form.Form}>
              <div className={Form.formInput}>
                <input
                  type="text"
                  name="tipo_uso"
                  className={Form.input}
                  placeholder="Tipo uso"
                />
              </div>
              <div multiple className={Form.formInput}>
                <select
                  name="estado"
                  className={`${Form.input} ${Form.select}`}
                >
                  <option value="" defaultValue="">
                    ESTADO
                  </option>
                  <option value={0}>Inhabilitado</option>
                  <option value={1}>Habilitado</option>
                </select>
                <div className={Form.botones}>
                  <button type="submit" name="guardar" className={Form.buton1}>
                    GUARDAR
                  </button>
                  <button type="reset" name="eliminar" className={Form.buton2}>
                    LIMPIAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarUso;
