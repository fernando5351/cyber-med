import React from 'react'
import CreateForm from '../form'
import ProductContextProvider from "../../tipo-consumo/arbol_info/ProductContextProvider"
import Uso from "../../tipo_uso/arbol_info/productContextprovider"
import ProductContext from '../arbol_info/ProductContextProvider'
const Create = () => {
  return (
    <div>
      <ProductContext>
        <ProductContextProvider>
          <Uso>
            <CreateForm />
          </Uso>
        </ProductContextProvider>
      </ProductContext>
    </div>
  )
}

export default Create