import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        alert('Compra realizada con éxito. ¡Gracias por tu compra!');
        clearCart(false); // Clear cart without notification
        navigate('/');
    };

    const [showTooltip, setShowTooltip] = React.useState(false);

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
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <button disabled={true} onClick={handleCheckout} onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
                    Finalizar Compra
                </button>
                {showTooltip && (
                    <div style={{ position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)', background: '#333', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '0.9rem', whiteSpace: 'nowrap', zIndex: 1,}}>
                        Las compras no están disponibles por ahora.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;