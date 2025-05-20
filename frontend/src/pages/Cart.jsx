import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const { cart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();

    const handleQuantityChange = (item, e) => {
        const value = parseInt(e.target.value, 10);
        if (value > 0) {
            updateQuantity(item._id, value);
        }
    };

    return (
        <div>
            <h2>Revisa tu carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div className={styles.cartContainer}>
                    <ul className={styles.cartListContainer}>
                        {cart.map((item, index) => (
                            <li key={index} className={styles.cartItemDetail}>
                                {item.name}  <b>€{item.price} </b>
                                <input type="number" min="1" value={item.quantity} className={styles.cartInput} onChange={(e) => handleQuantityChange(item, e)}/>   
                                <button className={styles.cartRemoveBtn} onClick={() => removeFromCart(item._id)}><MdDelete /></button>
                            </li>
                        ))}
                    </ul>
                    <p>€{getTotal()}</p>
                    <button className={styles.clearCartBtn} onClick={clearCart}>Limpiar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default Cart;