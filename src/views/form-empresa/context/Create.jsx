import React from "react";
import CreateForm  from '../FormEmpresa'
import ProductContextProvider from "../arbol_info/ProductContextprovider";

const Create = () => {
    return(
        <div>
            <ProductContextProvider>
                <CreateForm/>
            </ProductContextProvider>
        </div>
    )
}

export default Create