import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cartItems, clearCart } = useCart();

    const handleCheckout = () => {
        alert('Compra realizada con éxito. ¡Gracias por tu compra!');
        clearCart();
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;