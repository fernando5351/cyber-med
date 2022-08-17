import React, { createContext, useState, useEffect } from 'react'
import { ProductServices } from "./ProductServices"

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const productService = new ProductServices();

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        //ProductServices()
        productService.getProduct().then(data => setProducts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createProduct = (product) => {
        productService
            .postProuct(product)
            .then((data) => setProducts([...products, data]))
    }
    return (
        <ProductContext.Provider
            value={
                createProduct
            }
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider