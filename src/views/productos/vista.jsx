import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/navegacion/Navbar";
import table from "../../css/tableProducts.module.css";
import { useNavigate } from "react-router-dom";
import { ProductContextProduct } from "./arbol_info/ProductContextProvider";

function Vista() {
  const { productsDelete, findProduct, productEdition } = useContext(ProductContextProduct);

  const [products, setConsumo] = useState([])
  const [productData, setProductData] = useState()

  const navigate = useNavigate()
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('view'))
    if (data) {
      setConsumo(data)
    }
    if (productEdition) setProductData(productEdition)
    localStorage.setItem('editProduct', JSON.stringify(productData))
  }, [productEdition, productData])

  const handleDelete = (id) => {
    alert("desea eliminar el producto con el id " + id)
    productsDelete(id)
    navigate("/medicinas")
  }

  const handleEdit = (id) => {
    findProduct(id)
    setTimeout(() => {
      navigate("/medicinas/actualizar-product")
    }, 100)
  }

  //console.log(products);
  return (
    <div>
      <Navbar />
      <div className={table.container}>
        {
          products.map((products) => (
            <div className={table.containerTable}>
              <div className={table.containerData64}>
                <div className={table.containerImg}>
                  <div className={table.padingImg}>
                    <img
                      src={products.img_url}
                      alt=""
                      className={table.img}
                    />
                  </div>

                </div>
                <div className={table.data}>
                  <div className={table.borderName}>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Nombre:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>{products.nombre}</p>
                      </div>
                    </div>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Precio:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>{products.precios}</p>
                      </div>
                    </div>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Gramos:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>{products.cant_gramos}</p>
                      </div>
                    </div>
                    <div className={table.thNombre}>
                      <div className={table.theadNombre}>
                        <p className={table.textMain}>Marca:</p>
                      </div>
                      <div className={table.tdNOmbre}>
                        <p className={table.textRight}>{products.marca}</p>
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
                      <p className={table.textRight}>{products.descripcion}</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Uso:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>{products.tipo_uso}</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Administracion:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>{products.tipo_consumo}</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Cantidad:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>{products.cantidad_medicamento}</p>
                    </div>
                  </div>
                  <div className={table.subContent}>
                    <div className={table.contentLeft}>
                      <p className={table.textLeft}>Lote:</p>
                    </div>
                    <div className={table.contentRight}>
                      <p className={table.textRight}>{products.lote}</p>
                    </div>
                  </div>
                </div>
                <div className={table.contentUp}>
                  <button className={table.btn} onClick={() => {
                    handleEdit(products.id)
                  }}>Editar</button>
                  <button className={table.btn} onClick={() => {
                    handleDelete(products.id)
                  }}>Borrar</button>
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
