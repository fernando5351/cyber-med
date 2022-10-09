import React from "react";
import ProductContextEmpresa from "../arbol_info/ProductContextprovider";
import Table from "../../../components/table/Tableempresa"

const Tableempresa = () =>{
    return (
        <div>
            <ProductContextEmpresa>
                <Table/>
            </ProductContextEmpresa>
        </div>
    )
}

export default Tableempresa