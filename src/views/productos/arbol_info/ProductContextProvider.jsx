import React, { createContext, useState, useEffect } from 'react'
import { ProductService } from "./productServices"

export const ProductContextProduct = createContext()
const productService = new ProductService()

const ProductContext = (props) => {

    const [products, setProducts] = useState([])
    const [viewProducts, setViewProducts] = useState([])
    const [productEdition, setProductEdition] = useState(null)

    useEffect(() => {
        productService.readAll().then((data) => setProducts(data));
    }, [])

    const viewProduct = (id) => {
        productService.readProduct(id)
            .then((data) => setViewProducts(data))
    }

    const createProduct = (product) => {
        productService.create(product)
            .then(res => console.log(res))
            console.log(products)
    }

    const productsDelete = (id) => {
        productService.delete(id)
            .then(() => setProducts(products.filter((p) => p.id !== id)))
    }

    const findProduct = (id) => {
        const product = products.find(p => p.id === id)

        setProductEdition(product)
    }

    const updateProduct = (product) => {
        productService.update(product)
            .then((data) =>
                setProducts(
                    products.map((p) => (p.id === product.id ? data : product))
                ))
        setProductEdition(null)
    }

    return (
        <ProductContextProduct.Provider
            value={{
                products,
                createProduct,
                productsDelete,
                findProduct,
                updateProduct,
                productEdition,
                viewProduct,
                viewProducts
            }}
        >
            {props.children}
        </ProductContextProduct.Provider>
    )
}

export default ProductContext