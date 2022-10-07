import React from "react";
import ProductContextEmpresa from "../arbol_info/ProductContextprovider";
import FormEmpresa from "../FormEmpresa";

const Create = () => {
    return(
        <div>
            <ProductContextEmpresa>
                <FormEmpresa />
            </ProductContextEmpresa>
        </div>
    )
}

export default Create