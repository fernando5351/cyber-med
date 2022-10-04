import React from 'react'
import  CreateForm from '../create'
import ProductContextProvider from '../arbol_info/productContextprovider'


 const Create = () => {
  return (
    <div>
        <ProductContextProvider>
            <CreateForm/>
        </ProductContextProvider>
    </div>
  )
}

export default Create
