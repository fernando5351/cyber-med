import React from 'react'
import Formulario from '../Formulario'
import ProductContextProvider from '../arbol_info/ProductContextProvider'

const FormUso = () => {
  return (
    <div>
        <ProductContextProvider>
              <Formulario />
        </ProductContextProvider>
    </div>
  )
}

export default FormUso