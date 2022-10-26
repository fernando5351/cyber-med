import React from "react";
import ProductContextEmpresa from "../arbol_info/ProductContextprovider";
import Edit from "../FormEditEmpresa";
import ProductContext from "../../productos/arbol_info/ProductContextProvider";

const Editempresa = () => {
    return (
        <div>  
            <ProductContext> 
                <ProductContextEmpresa>
                    <Edit/>
                </ProductContextEmpresa>
            </ProductContext>
        </div>
    )
}

export default Editempresa