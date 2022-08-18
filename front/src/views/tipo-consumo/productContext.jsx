import React, { createContext, useEffect, useState } from 'react'
import { ProductService } from "./ProductService";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const productService = new ProductService();

    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.readAll().then((data) => setProducts(data));
      }, []);

    const createProduct = (RequestInit) => {
        productService
            .PostProduct(RequestInit)
            .then((data) => setProducts([...products, data]));
    }
    return (
        <ProductContext.Provider
            value={
                createProduct
            }>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider