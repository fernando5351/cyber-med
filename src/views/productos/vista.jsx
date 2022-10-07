import React, { useContext } from "react";
import Navbar from "../../components/navegacion/Navbar";
import table from "../../css/tableProducts.module.css"
//import { useNavigate } from "react-router-dom";
import { ProductContextProduct } from "./arbol_info/ProductContextProvider"

function Vista() {

  const { products } = useContext(ProductContextProduct)
  console.log(products);

  return (
    <div>
      <Navbar />
      <div className={table.container}>
        {/* {
          products.map((products) => ( */}
        <div className={table.containerTable}>
          <div className={table.containerData64}>
            <div className={table.containerImg}>
              <img src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/317854/317854_1140x516.jpg" alt="" className={table.img} />
            </div>
            <div className={table.data}>
              <div className={table.borderName}>
                <div className={table.thNombre}>
                  <div className={table.theadNombre}>
                    <p>hola</p>
                  </div>
                  <div className={table.tdNOmbre}>
                    <p>como estas?</p>
                  </div>
                </div>
                <div className={table.thNombre}>
                  <div className={table.theadNombre}>

                  </div>
                  <div className={table.tdNOmbre}>

                  </div>
                </div>
                <div className={table.thNombre}>
                  <div className={table.theadNombre}>

                  </div>
                  <div className={table.tdNOmbre}>

                  </div>
                </div>
                <div className={table.thNombre}>
                  <div className={table.theadNombre}>

                  </div>
                  <div className={table.tdNOmbre}>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={table.table}>
            
          </div>
        </div>
        {/* ))
        } */}
      </div>
    </div>
  );
}

export default Vista;
