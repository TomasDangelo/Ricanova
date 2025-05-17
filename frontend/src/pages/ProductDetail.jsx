import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import styles from '../styles/ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useProduct();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const product = products.find((p) => p._id  === id);
    if (!product) {
        return <div className={styles.notFound}>Producto no encontrado.</div>;
    }

    // Sección recomendada
    const recommended = products
        .filter((p) => (p._id || p.id) !== (product._id || product.id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    return (
        <div className={styles.detailContainer}>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>← Volver</button>
            <div className={styles.productDetail}>
                <div className={styles.imageSection}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                </div>
                <div className={styles.infoSection}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <p className={styles.productCategory}>Categoría: {product.category}</p>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>Precio: <b>${product.price}</b></p>
                    <p className={styles.productStock}>
                        {product.stock > 0 ? `Stock disponible: ${product.stock}` : <span className={styles.outOfStock}>Sin stock</span>}
                    </p>
                    <button className={styles.addToCartBtn} onClick={() => addToCart(product)} disabled={product.stock === 0}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className={styles.recommendedSection}>
                <h2>Otros usuarios también compraron...</h2>
                <div className={styles.recommendedGrid}>
                    {recommended.map((rec) => (
                        <div key={rec._id || rec.id} className={styles.recommendedCard} onClick={() => navigate(`/products/${rec._id || rec.id}`)} >
                            <img src={rec.image} alt={rec.name} className={styles.recommendedImg} />
                            <div className={styles.recommendedInfo}>
                                <span className={styles.recName}>{rec.name}</span>
                                <span className={styles.recPrice}>${rec.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;