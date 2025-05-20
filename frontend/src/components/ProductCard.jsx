import React from "react";
import styles from '../styles/ProductCard.module.css'; 
import { NavLink } from "react-router-dom";
const ProductCard = ({ product, addToCart }) => {
    const { image, name, price, description, category } = product;
    

    return (
        <NavLink to={`/products/${product._id}`}>
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{name}</h3>
                <p className={styles.productCategory}>{category}</p>
                <p className={styles.productDescription}>{description}</p>
                <div className={styles.productFooter}>
                    <span className={styles.productPrice}>${price}</span>
                    <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
        </NavLink>
    );
};

export default ProductCard;

