import React from 'react'
import Formulario from './Formulario'
import ProductContextProvider from './ProductContextProvider'
import Table from './Table'

const FormUso = () => {
  return (
    <div>
        <ProductContextProvider>
            <Table>
              <Formulario />
            </Table>
        </ProductContextProvider>
    </div>
  )
}

export default FormUso