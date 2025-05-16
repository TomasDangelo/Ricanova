import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import styles from '../styles/Products.module.css'; 


const Products = () => {
    const {products} = useProduct();
    const { addToCart } = useCart();

    return (
        <div>
            <h1 className={styles.productsTitle}>Productos</h1>
            <div className={styles.productsContainer}>
                {products.map((product) => (
                    <ProductCard key={product.id} addToCart={addToCart} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;