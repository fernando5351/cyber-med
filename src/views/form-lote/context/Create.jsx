import React from "react";
import ProducContextLote from "../arbol_info/ProductContextprovider";
import CreateLote from "../FormLote";

const Createlote = () =>{
    return(
        <div>
            <ProducContextLote>
                <CreateLote/>
            </ProducContextLote>
        </div>
    )
}

export default Createlote