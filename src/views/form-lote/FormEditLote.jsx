import React from "react";
import Back from "../../icon/Vista/retroceder.png"
import Navbar from "../../components/navegacion/Navbar"
import Style from "../../css/formEmpresa.module.css"
import Barra from "../../css/barranav.module.css"
import { useNavigate } from "react-router-dom"

function FormEditLote(){

    const Navigate = useNavigate();

    const backTableL = () => {
        Navigate("/empresa/lote")
    }

    return(
        <div>
            <Navbar />
                       <img 
                       className={Barra.back2} 
                       alt="" 
                       src={Back}
                        onClick={() =>{
                           backTableL()
                       }} 
                       />
            <div className={Style.content}>
                <div className={Style.form}>
                    <h1 className={Style.text}>EDITAR EL LOTE</h1>
                    <form className={Style.formempresa}>
                        <input
                          className={Style.input}
                          type="text"
                          name="fecha_ingreso"
                          placeholder="Fecha de ingreso"
                        />
                        <input
                          className={Style.input}
                          type="text"
                          name="fecha_vencimiento"
                          placeholder="Fecha de vencimiento"
                        />
                        <input
                          className={Style.input}
                          type="text"
                          name="detalle_product"
                          placeholder="Detalles del Lote"
                        />
                        <input
                          className={Style.input}
                          type="numeric"
                          name="cantidad"
                          placeholder="Cantidad"
                        />
                        <input
                          className={Style.input}
                          type="numeric"
                          name="precio_producto"
                          placeholder="Precio del producto"
                        />
                        <input
                          className={Style.input}
                          type="text"
                          name="id_empresa"
                          placeholder="Id de la empresa"
                        />
                        <select className={Style.select}>
                          <option value="" defaultValue="">
                            ESTADO
                          </option>
                          <option value={1}>ACTIVO</option>
                          <option value={0}>INACTIVO</option>
                        </select>
                        <div className={Style.btn}>
                          <button
                             type="submit"
                             className={Style.button}
                          >
                            {" "}
                            ENVIAR
                          </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FormEditLote;