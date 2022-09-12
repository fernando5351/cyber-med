import React from 'react'
import ProductContextProvider from './ProductContextProvider'
import Tabla from './tablaMedicinas'

const View = () => {
  return (
    <div>
        <ProductContextProvider>
            <Tabla />
        </ProductContextProvider>
    </div>
  )
}

export default View