import React, {createContext,useState,useEffect} from 'react';
import { ProductService } from './ProductsServices';

export const ProductContext = createContext();
const productService = new ProductService();

const ProductContextProvider = (props) => {

    const [products,setProducts] = useState([]);
    const [prodcutEditon, setprodcutEditon] = useState(null);

    useEffect(()=>{
        productService.readAll().then((data) => setProducts(data));
    },[])

    const createProduct = (product) => {
        productService.create(product)
            .then ((data) => setProducts([...products,data]));
    }

    const deleteProduct = (id) => {
        productService.delete(id)
            .then(() => setProducts(products.filter((p) => p.id !==id)));
    }

    const findProduct = (id) => {
       const product = products.find((p) => p.id === id)

       setprodcutEditon(product)
    }

    const updateProduct = (product) => {
        productService.update(product)
            .then((data) =>setProducts(
                products.map((p)=>(p.id === products.id ? data: product))
            ))
            setprodcutEditon(null)

    }    
    
    return(
        <ProductContext.Provider

        value = {{
            products,
            createProduct,
            deleteProduct,
            findProduct,
            updateProduct,
            prodcutEditon
        }} 
        >
            {props.chhildren}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider