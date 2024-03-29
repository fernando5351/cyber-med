import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Agregar from "../../icon/Vista/agregar.png";
import icoLote from "../../icon/Vista/lote.png"
import Barra from "../../css/barranav.module.css";
import tabla from "../../css/Add-medicines.module.css";
import Edit from "../../icon/addMed/editar.png";
import Delete from "../../icon/addMed/eliminar.png";
import { ProductContextEmpresa } from "../../views/form-empresa/arbol_info/ProductContextprovider";



function Tableempresa() {

  const {products, deleteProduct, findProduct ,prodcutEditon} = useContext(ProductContextEmpresa)

  const Navigate = useNavigate();
  console.log(products)
  
  const Deleteproduct = (id) => {
    deleteProduct(id)
  }

  const [productData,setProductData] = useState()

  useEffect(()=> {
    if(prodcutEditon) setProductData(prodcutEditon);
    localStorage.setItem('empresa',JSON.stringify(productData))
  },[prodcutEditon,productData]);

  const EditProduct = (id) => {
    findProduct(id);
    setTimeout(() => {
      Navigate('/empresa/editar')
    },100)
  }
  

  const Add = () => {
    Navigate("/empresa/crear");
  };

  const viewLote = () => {
    Navigate("/empresa/lote")
  } 



  // const fetchAPI = async () => {
  //   const data = await fetch(API);
  //   const dataJson = await data.json();
  //   console.log(dataJson);
  //   setEmpresa(dataJson);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <div className={tabla.containerAdd}>
      <div className={tabla.containerTab}>
        <div className={tabla.containerBtn}>
        <img
            className={Barra.viewLote}
            src={icoLote}
            alt="viewLote"
            onClick={() => {
              viewLote();
            }} 
          />

          <img
            className={Barra.annadir}
            src={Agregar}
            alt="agregar"
            onClick={() => {
              Add();
            }}
          />
        </div>
        <div className={tabla.containerTableE}>
          <table className={tabla.tbl}>
            <thead>
              <tr className={tabla.background}>
                <th>EMPRESA</th>
                <th>DIRECCION</th>
                <th>PRODUCTO</th>
                <th>EMAIL</th>
                <th>TELEFONO</th>
                <th>ACTIVO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <>
                {products.map((products) => (
                  <tr key={products.id} className={tabla.background}>
                    <td>{products.nombre_empresa}</td>
                    <td>{products.direccion}</td>
                    <td>{products.nombre}</td>
                    <td>{products.email}</td>
                    <td>{products.telefono}</td>
                    <td>{products.activo}</td>
                    <td>
                      <img
                        className={Barra.annadir}
                        src={Edit}
                        alt=""
                        onClick={() => {
                          EditProduct(products.id);
                        }}
                      />
                      <img className={Barra.annadir} 
                      src={Delete} 
                      alt=""
                      onClick={()=>{
                        Deleteproduct(products.id);
                      }} />
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tableempresa;
