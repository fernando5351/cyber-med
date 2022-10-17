import React from "react"
import ContTa from "../../css/contenttabla.module.css"
import Navbar from "../../components/navegacion/Navbar"
import TableLote from "../../components/table/TableLote"

function Lote(){
    return(
        <div className={ContTa.contenedorMT}>
            <Navbar />
            <div className={ContTa.contenedorT}>
                <TableLote />
            </div>
        </div>
    )
}
export default Lote