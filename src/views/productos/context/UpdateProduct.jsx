import React from 'react'
import ProductContext from '../arbol_info/ProductContextProvider'
import UpdateProductForm from '../UpdateProductForm'
import Uso from "../../tipo_uso/arbol_info/productContextprovider"
import Consumo from "../../tipo-consumo/arbol_info/ProductContextProvider"


const UpdateProduct = () => {
  return (
    <div>
        <ProductContext>
            <Uso >
              <Consumo>
                <UpdateProductForm />
              </Consumo>
            </Uso>
        </ProductContext>
    </div>
  )
}

export default UpdateProduct