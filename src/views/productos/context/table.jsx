import React from 'react'
import ProductService from '../arbol_info/ProductContextProvider'
import Vista from '../vista'

const Table = () => {
    return (
        <div>
            <ProductService>
                <Vista />
            </ProductService>
        </div>
    )
}

export default Table