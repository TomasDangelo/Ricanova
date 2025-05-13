import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/api";

const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/products");
            if (!response.ok) {
                throw new Error("Error fetching products");
            }
            const data = await response.json();
            setProducts(data);
            console.log("Products fetched successfully:", data);
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getProducts();
    },[])

    return (
        <ProductContext.Provider value={{ getProducts, products, loading }}>
            {children}
        </ProductContext.Provider>
    );
}

