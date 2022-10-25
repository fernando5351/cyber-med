import React from "react";
import ProducContextLote from "../arbol_info/ProductContextprovider";
import CreateLote from "../FormLote";
import ProductEmpresa from "../../form-empresa/arbol_info/ProductContextprovider";

const Createlote = () =>{
    return(
        <div>
            <ProducContextLote>
             <ProductEmpresa>
               <CreateLote/>
             </ProductEmpresa>
            </ProducContextLote>
        </div>
    )
}

export default Createlote