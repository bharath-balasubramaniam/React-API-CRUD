import React from "react";
import { useState } from "react";
const ProductContext = React.createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {
  let [product, setproduct] = useState([]);
  return (
    <ProductContext.Provider value={{ product, setproduct }}>
      {children}
    </ProductContext.Provider>
  );
};
