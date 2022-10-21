import React, {createContext,useState,useEffect} from 'react';
import {ProductService} from './ProductsServices';

export const ProductContextLote = createContext();
const productService = new ProductService();


const ProductContextProviderLote = (props) => {
    const [products,setProducts] = useState([]);
    const [producEdition,setproductEdition] = useState(null);

    useEffect(()=>{
        productService.readAll().then((data)=>setProducts(data))
    },[])

    const createProduct = (product) =>{
        productService.create(product)
            .then((data)=>setProducts([...products,data]));
    }

    const deleteProduct = (id)=>{
        productService.delete(id)
            .then(()=>setProducts(products.filter((p)=>p.id !==id)));
    }

    const findProduct = (id) =>{
        const product = products.find((p)=> p.id === id)

        setproductEdition(product)
    }

    const updateProduct =(product) =>{
        productService.update(product)
            .then((data)=>setProducts(
                products.map((p)=>(p.id === product.id ? data: product))
            )
            
         )

        setproductEdition(null)
    }

    return (
        <ProductContextLote.Provider
        value={{
            products,
            createProduct,
            deleteProduct,
            findProduct,
            updateProduct,
            producEdition
        }} 
        >
            {props.children}
        </ProductContextLote.Provider>
    )
}

export default ProductContextProviderLote