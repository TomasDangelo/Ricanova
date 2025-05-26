import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/api";

const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

const apiUrl = import.meta.env.RENDER_URL || import.meta.env.VITE_API_URL ;

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    const groupProductsByCategory = (products) => {
        const categoriesMap = {};

        products.forEach((product) => {
            const categoryName = product.category;

            if(!categoriesMap[categoryName]) {
                categoriesMap[categoryName] = {
                    name: categoryName,
                    products: []
                };
            }
            categoriesMap[categoryName].products.push({
                _id: product._id,
                name: product.name
            });
        })
        return Object.values(categoriesMap);
    }

    const getProducts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products`);
            const data = response.data;
            setProducts(data);

            const grouped = groupProductsByCategory(data); //Genero las categorias ya agrupadas 
            setCategories(grouped); 
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
        <ProductContext.Provider value={{ getProducts, products, categories, loading }}>
            {children}
        </ProductContext.Provider>
    );
}

