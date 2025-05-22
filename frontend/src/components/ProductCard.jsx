import React from "react";
import styles from '../styles/ProductCard.module.css'; 
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
    const { image, name, price, description, category } = product;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/products/${product._id}`);
    }    

    return (

        <div className={styles.productCard} onClick={handleClick}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{name}</h3>
                <p className={styles.productCategory}>{category}</p>
                <p className={styles.productDescription}>{description}</p>
                <div className={styles.productFooter}>
                    <span className={styles.productPrice}>${price}</span>
                    <button className={styles.addToCartBtn} onClick={(e) => {
                        e.stopPropagation(); 
                        addToCart(product);
                    }}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;

