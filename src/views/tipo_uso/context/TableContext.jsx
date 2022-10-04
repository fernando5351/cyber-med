import React from 'react'
import ProductContextProvider from '../arbol_info/productContextprovider'
import TableUso from '../Table'


const TableContext = () => {
  return (
    <div>
        <ProductContextProvider>
            <TableUso />
        </ProductContextProvider>
    </div>
  )
}

export default TableContext