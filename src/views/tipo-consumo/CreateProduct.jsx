import React from 'react'
import ProductContextProvider from './ProductContextProvider'
import Create from './create'

const createProduct = ({ isVisible, setIsVisible }) => {
  return (
    <div>
      <>
        {isVisible &&
          <ProductContextProvider>
            <Create />
          </ProductContextProvider>
        }
      </>
    </div>
  )
}

export default createProduct