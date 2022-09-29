import React from 'react'
import ProductContextProvider from '../arbol_info/ProductContextProvider'
import Edit from '../Edit'

const EditForm = () => {
  return (
    <div>
        <ProductContextProvider>
            <Edit />
        </ProductContextProvider>
    </div>
  )
}

export default EditForm