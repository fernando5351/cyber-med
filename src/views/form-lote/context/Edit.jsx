import React from "react";
import ProductContextLote from '../arbol_info/ProductContextprovider'
import EditLote from '../FormEditLote'
import ProductEmpresa from "../../form-empresa/arbol_info/ProductContextprovider";
const Editlote = () => {
    return(
        <div>
            
                <ProductContextLote>
                    <ProductEmpresa>
                        <EditLote/>
                    </ProductEmpresa>
                </ProductContextLote>
            
        </div>
    )
}

export default Editlote