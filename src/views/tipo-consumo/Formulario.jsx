import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css'
import { useNavigate } from "react-router-dom";
import { ProductContext } from './ProductContextProvider'
import { Context } from './Table'

function Formulario() {

  const { updateProduct, editProduct } = useContext(ProductContext)
  const { EditProduct, edit, setEdit } = useContext(Context)

  EditProduct()
  const initialData =  {
    tipo_consumo: "",
    estado: ""
  }
  const [consumo, setConsumo] = useState(initialData)

  useEffect(() => {
    if (editProduct) setConsumo(editProduct);
  }, [editProduct]);

  const updateField = (data, field) => {
    setConsumo({
      ...consumo,
      [field]: data

    });
    console.log(consumo)
  }

  const navigate = useNavigate()
  const saveProduct = () => {
    updateProduct(consumo)
    setConsumo(initialData)
    navigate("/medicinas/listar-consumo")
  }
  return (
    <>
      <div className={Form.contentUso}>
        <Navbar />
        <div className={Form.containerUso}>
          <div className={Form.contenedorPrincipalUso}>
            <div className={Form.textoUso}>
              <h1>Editar Tipo de Consumo</h1>
            </div>
            <div className={Form.body}>
              <form className={Form.Form}>
                <div className={Form.formInput}>
                  <input type="text" name="tipo_consumo" className={Form.input} placeholder="Tipo uso de consumo"
                    value={consumo.tipo_consumo}
                    onChange={ (e) => {
                      updateField(e.target.value, "tipo_consumo")
                    }}
                  />
                </div>
                <div multiple className={Form.formInput}>
                  <select name="estado" className={`${Form.input} ${Form.select}`}

                  >
                    <option value="" defaultValue="">ESTADO</option>
                    <option value={0}>Inhabilitado</option>
                    <option value={1}>Habilitado</option>
                  </select>
                </div>
                <div className={Form.botones}>
                  <button name="guardar" onClick={(e) => {
                    saveProduct()
                    e.preventDefault();
                  }} className={Form.buton1}>GUARDAR</button>
                  <button type="reset" name="eliminar" className={Form.buton2}>LIMPIAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Formulario;