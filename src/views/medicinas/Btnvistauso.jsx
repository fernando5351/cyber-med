import React from 'react'
import ProductContext from '../productos/arbol_info/ProductContextProvider'
import Medicinas from './Medicinas'

const Btnvistauso = () => {
  return (
    <div>
        <ProductContext>
          <Medicinas /> 
        </ProductContext>
    </div>
  )
}

export default Btnvistauso