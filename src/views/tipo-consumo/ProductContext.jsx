import React, { createContext, useState, useEffect } from 'react'
import { ProductService } from "./ProductServices"

export const ProductContext = createContext();
const productService = new ProductService();

const  ProductContextProvider = (props) => {

    const [products, setProducts] = useState([])
    const [editProduct, setEditProduct] = useState(null)

    useEffect(() => {
        productService.readAll().then( (data) => setProducts(data));
    }, [])

    const createProduct = (product) => {
        productService.create(product)
            .then((data) => setProducts([...products, data]))
    }

    const deleteProduct = (id) => {
        productService.delete(id)
            .then(() => setProducts(products.filter((p) => p.id !== id)))
    }

    const findProduct = (id) => {
        const product = products.find((p) => p.id === id)

        setEditProduct(product)
    }

    const updateProduct = (product) => {
        productService.update(product)
            .then((data) => 
                setProducts(
                    products.map( (p) => (p.id === product.id ? data : product))
                )
            );
        setEditProduct(null)
    }

    return (
        <ProductContext.Provider
            value={{
                createProduct,
                deleteProduct,
                findProduct,
                editProduct,
                updateProduct,
                products
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider