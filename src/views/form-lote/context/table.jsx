import React from "react";
import ProductContextProvider from '../../form-lote/arbol_info/ProductContextprovider';
import TableLote from '../../lote/Lote'

const TableContext = () =>{
    return (
        <div>
            <ProductContextProvider>
                <TableLote/>
            </ProductContextProvider>
        </div>
    )
}

export default TableContext