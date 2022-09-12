import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navegacion/Navbar";
import Form from '../../css/formtipouso.module.css';
import { ProductContext } from './ProductContextProvider'

function Formuso() {
  const {
    createProduct,
    deleteProduct,
    editProduct,
    updateProduct,
  } = useContext(ProductContext)


  const [productData, setProductData] = useState({
    tipo_consumo: "",
    estado: ""
  })

  const updateFiled = (field, data) => {
    setProductData({
      ...productData,
      [field]: data,
    });
  console.log(productData);
  }
return (
    <div className={Form.contentUso}>
      <Navbar />
      <div className={Form.containerUso}
      >
        <div className={Form.contenedorPrincipalUso}>
          <div className={Form.textoUso}>
            <h1>Agr egar Tipo de Consumo</h1>
          </div>
          <div className={Form.body}>
            <form className={Form.Form}>
              <div className={Form.formInput}>
                <input value={productData.tipo_consumo} type="text" name="tipo_consumo" className={Form.input} placeholder="Tipo de consumo"
                  onChange={e => updateFiled(e.target.value, "tipo_consumo")}
                />
              </div>
              <div multiple className={Form.formInput}>
                <select value={productData.estado} name="estado" className={`${Form.input} ${Form.select}`}>
                  <option value="" defaultValue="">ESTADO</option>
                  <option value={0}>Inhabilitado</option>
                  <option value={1}>Habilitado</option>
                </select>
              </div>
              <div className={Form.botones}>
                <button type="submit" name="guardar" className={Form.buton1}>GUARDAR</button>
                <button type="reset" name="eliminar" className={Form.buton2}>LIMPIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formuso; 