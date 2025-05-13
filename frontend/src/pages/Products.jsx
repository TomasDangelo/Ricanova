import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../context/ProductContext';
const Products = () => {
    const {products} = useProduct();

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map((product) => (
                    <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} description={product.description} category={product.category} />
                ))}
            </ul>
        </div>
    );
};

export default Products;