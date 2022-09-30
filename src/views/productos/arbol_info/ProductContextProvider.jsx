import React, { createContext, useState, useEffect} from 'react'
import { ProductService } from "./productServices"

export const ProductContext = createContext()
const productService = new ProductService()
 
const ProductContextProvider = (props) => {


    const [products, setProducts] = useState([])
    const [productEdition, setProductEdition] = useState(null)

    useEffect(() => {
     productService.readAll().then( (data) => setProducts(data) );
    }, [])
    
    const createProduct = ( product ) => {
        productService.create(product)
            .then( data => setProducts([ ...products, data]))
    }

    const productsDelete = ( id ) => {
        productService.delete(id)
            .then(() => setProducts(products.filter( (p) => p.id !== id )))
    }

    const findProduct = ( id ) => {
        const product = products.find( p => p.id === id )

        setProductEdition(product)
    }

    const updateProduct = ( product ) => {
        productService.update(product)
            .then( (data ) => 
                setProducts(
                    products.map( (p) => ( p.id === product.id ? data : product ))
                ))
            setProductEdition(null)
    }

  return (
    <ProductContext.Provider
        value={{
            products,
            createProduct,
            productsDelete,
            findProduct,
            updateProduct,
            productEdition
        }}
    >
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider