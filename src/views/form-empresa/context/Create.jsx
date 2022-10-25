import React from "react";
import ProductContextEmpresa from "../arbol_info/ProductContextprovider";
import FormEmpresa from "../FormEmpresa";
import ProductContext from "../../productos/arbol_info/ProductContextProvider";

const Create = () => {
    return(
        <div>
            <ProductContext>
                <ProductContextEmpresa>
                    <FormEmpresa />
                </ProductContextEmpresa>
            </ProductContext>
        </div>
    )
}

export default Create