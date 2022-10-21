import React from "react";
import ProductContextLote from '../arbol_info/ProductContextprovider'
import EditLote from '../FormEditLote'

const Editlote = () => {
    return(
        <div>
            <ProductContextLote>
                <EditLote/>
            </ProductContextLote>
        </div>
    )
}

export default Editlote