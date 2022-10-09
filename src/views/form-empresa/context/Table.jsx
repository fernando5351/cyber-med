import React from "react";
import ProductContextEmpresa from "../arbol_info/ProductContextprovider";
import Empresa from "../../empresa/Empresa";

const Tableempresa = () =>{
    return (
        <div>
            <ProductContextEmpresa>
                <Empresa /> 
            </ProductContextEmpresa>
        </div>
    )
}

export default Tableempresa