import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
    const { cart, addToCart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();

    return (
        <div className={styles.cartContainer}>
            <h2>Revisa tu carrito</h2>
                {cart.length === 0? (
                    <p>Tu carrito está vacío</p>
                ): (
                    <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price} x {item.quantity}
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                <button onClick={() => addToCart(item.id)}>-</button>
                            </li>
                        ))}
                    </ul>

                    <p>{getTotal()}</p>
                    <button onClick={clearCart}>Limpiar Carrito</button>
                    </div>
                )}
        </div>
    );
};

export default Cart;