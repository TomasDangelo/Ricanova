import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, addToCart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();

    return (
        <div>
            <h1>Carrito</h1>
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
    );
};

export default Cart;