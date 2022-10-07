import React, { useContext } from "react";
import Navbar from "../../components/navegacion/Navbar";
import table from "../../css/tableProducts.module.css";
//import { useNavigate } from "react-router-dom";
import { ProductContextProduct } from "./arbol_info/ProductContextProvider";

function Vista() {
  const { products } = useContext(ProductContextProduct);
  console.log(products);

  return (
    <div>
      <Navbar />
      <div className={table.container}>
        {
          products.map((products) => (
            <div className={table.containerTable}>
              <div className={table.containerData64}>
                <div className={table.containerImg}>
                  <img
                    src={products.img_url}
                    alt=""
                    className={table.img}
                  />
                </div>
                <div className={table.data}>
                  <div className={table.borderName}>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Nombre:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>{products.id}</p>
                      </div>
                    </div>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Precio:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>$10.00</p>
                      </div>
                    </div>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Gramos:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>500gm</p>
                      </div>
                    </div>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Marca:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>Bayer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={table.table}>
                <div className={table.contentBack}>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Descripcion:</p>
                    </div>
                    <div className={table.contentRightD}>
                      <p className={table.textRight}>
                        Discurso oral o escrito en el que se explica cómo es una
                        cosa, una persona o un lugar para ofrecer una imagen o una
                        idea completa de ellos. "en la primera versión de la novela
                        aparecen dilatadas descripciones acerca de la mala vida de
                        la ciudad"
                      </p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Uso:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>Analgesico</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Administracion:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>Oral</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Cantidad:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>20</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Lote:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>1</p>
                    </div>
                  </div>
                </div>
                <div className={table.contentUp}>
                  <button className={table.btn}>Editar</button>
                  <button className={table.btn}>Borrar</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Vista;
