import React from "react";
import styles from '../styles/ProductCard.module.css'; 
import { useCart } from "../context/CartContext";

const ProductCard = ({ image, title, price, description, category }) => {
    const { addToCart } = useCart();

    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.productImage} />
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{title}</h3>
                <p className={styles.productCategory}>{category}</p>
                <p className={styles.productDescription}>{description}</p>
                <div className={styles.productFooter}>
                    <span className={styles.productPrice}>${price}</span>
                    <button className={styles.addToCartBtn} onClick={() => addToCart({ image, title, price })}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

