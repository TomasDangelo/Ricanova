import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Admin = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <button onClick={() => handleNavigation('/cart')}>Ir a Cart</button>
            <button onClick={() => handleNavigation('/checkout')}>Ir a Checkout</button>
            <button onClick={() => handleNavigation('/products')}>Ir a Products</button>
            <button onClick={() => handleNavigation('/login')}>Ir a Login</button> 
            <button onClick={() => handleNavigation('/settings')}>Ir a Settings</button> 
        </div>
    );
};

export default Admin;