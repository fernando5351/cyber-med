import React, { createContext, useState, useEffect } from "react";
import { ProductService } from "./ProductServices";

export const ProductContextConsumo = createContext();
const productService = new ProductService();

const ProductContextProvider = (props) => {
  
  const [uso, setProducts] = useState([]);

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    productService.readAll().then((data) => setProducts(data));
  }, []);

  const createProduct = (product) => {
    productService
      .create(product)
      .then((data) => setProducts([...uso, data]));
  };

  const deleteProduct = (id) => {
    productService
      .delete(id)
      .then(() => setProducts(uso.filter((p) => p.id !== id)));
  };

  const findProduct = (id) => {
    const product = uso.find((p) => p.id === id);

    setEditProduct(product);
  };

  const updateProduct = (product) => {
    productService
      .update(product)
      .then((data) =>
        setProducts(
          uso.map((p) => (p.id === product.id ? data : product))
        )
      );

    setEditProduct(null);
  };

  return (
    <ProductContextConsumo.Provider
      value={{
        createProduct,
        deleteProduct,
        findProduct,
        updateProduct,
        editProduct,
        uso,
      }}
    >
      {props.children}
    </ProductContextConsumo.Provider>
  );
};

export default ProductContextProvider;
