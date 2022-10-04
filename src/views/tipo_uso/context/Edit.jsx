import React from 'react'
import  Edit from '../Edit'
import ProductContextProvider from '../arbol_info/productContextprovider'

const EditUso = () => {
    return (
      <div>
          <ProductContextProvider>
            <Edit />
          </ProductContextProvider>
      </div>
    )
  }
  
  export default EditUso
