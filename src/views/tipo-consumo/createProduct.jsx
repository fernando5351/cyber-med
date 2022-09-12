import React from 'react'
import ProductContextProvider from './ProductContextProvider'
import Create from './create'

const createProduct = () => {
  return (
    <div>
        <ProductContextProvider>
            <Create />
        </ProductContextProvider>
    </div>
  )
}

export default createProduct