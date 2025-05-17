import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
    const { cart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();

    return (
        <div>
            <h2>Revisa tu carrito</h2>
                {cart.length === 0? (
                    <p>Tu carrito está vacío</p>
                ): (
                    <div className={styles.cartContainer}>
                    <ul className={styles.cartListContainer}>
                        {cart.map((item, index) => (
                            <li key={index} className={styles.cartItemDetail}>
                                {item.name}  <b>€{item.price} x {item.quantity}u.</b> 
                                <button className={styles.cartBtns} onClick={() => removeFromCart(item._id)}>Eliminar</button>
                                <div>
                                <button className={styles.cartBtns} onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                                <button className={styles.cartBtns} onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p>€{getTotal()}</p>
                    <button onClick={clearCart}>Limpiar Carrito</button>
                    </div>
                )}
        </div>
    );
};

export default Cart;