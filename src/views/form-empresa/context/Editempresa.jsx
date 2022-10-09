import React from "react";
import ProductContextEmpresa from "../arbol_info/ProductContextprovider";
import Edit from "../FormEditEmpresa";


const Editempresa = () => {
    return (
        <div>
            <ProductContextEmpresa>
                <Edit/>
            </ProductContextEmpresa>
        </div>
    )
}

export default Editempresa