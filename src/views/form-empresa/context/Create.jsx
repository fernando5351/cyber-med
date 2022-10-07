import React from "react";
import ProductContextProvider from "../arbol_info/ProductContextprovider";
import FormEmpresa from "../FormEmpresa";

const Create = () => {
    return(
        <div>
            <ProductContextProvider>
                <FormEmpresa />
            </ProductContextProvider>
        </div>
    )
}

export default Create