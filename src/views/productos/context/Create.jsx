import React from 'react'
import CreateForm from '../form'
import ProductContextProvider from "../../tipo-consumo/arbol_info/ProductContextProvider"
import ProductContext from '../arbol_info/ProductContextProvider'
const Create = () => {
  return (
    <div>
      <ProductContext>
        <ProductContextProvider>
          <CreateForm />
        </ProductContextProvider>
      </ProductContext>
    </div>
  )
}

export default Create