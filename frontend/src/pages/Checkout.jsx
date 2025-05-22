import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        alert('Compra realizada con éxito. ¡Gracias por tu compra!');
        clearCart();
        navigate('/');
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cart.map((item, index) => (
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