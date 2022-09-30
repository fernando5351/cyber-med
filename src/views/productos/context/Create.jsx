import React from 'react'
import CreateForm from '../Create'
import ProductContextProvider from '../arbol_info/ProductContextProvider'

const Create = () => {
  return (
    <div>
        <ProductContextProvider>
            <CreateForm />
        </ProductContextProvider>
    </div>
  )
}

export default Create