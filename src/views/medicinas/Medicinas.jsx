import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navegacion/Navbar";
import Barranav from "../../components/navegacion/Barranav";
import med from "../../css/medicinas.module.css";
import Btnview from "../../css/vistauso.module.css"
import { useNavigate } from "react-router-dom";
import { ProductContextProduct } from "../productos/arbol_info/ProductContextProvider";

function Medicinas() {

  const { products, viewProduct, viewProducts} = useContext(ProductContextProduct)

  const navigate = useNavigate()
  const [product, setProduct] = useState()  
  useEffect(() => {
    if (viewProducts) setProduct(viewProducts)
    localStorage.setItem('view', JSON.stringify(product))
  }, [viewProducts, product])
  
  const handleView = (id) => {
    console.log(id);
    viewProduct(id)
    setTimeout(() => {
      navigate("/view-products")
    }, 600);
  }
  return (
    <div>
      <Navbar />

      <div className={med.contenedorPrincipal}>
        <div className={med.conteneroClass}>
          <Barranav title="Medicinas" />
        </div>
        <div className={med.contenedorMedicinas}>
          {
            products.map((products) => (
              <>
                <div className={Btnview.contenedorPro}>
                  <div className={Btnview.subcontenedorPro}>
                    <div className={Btnview.card}>
                      <div className={Btnview.cardContent}>
                        <img className={Btnview.imgPro} src={products.img_url} alt="imagenes" />
                        <div className={Btnview.contentBtn}>
                        </div>
                        <button className={Btnview.btnVerM}
                          onClick={(e) => {
                            handleView(products.id)
                            e.preventDefault()
                          }}>{products.nombre}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Medicinas;
