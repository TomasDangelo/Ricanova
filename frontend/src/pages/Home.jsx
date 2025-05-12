import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bienvenido a BabyCarts</h1>
            <button onClick={() => navigate('/products')}>Ver Productos</button>
            <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        </div>
    );
};

export default Home;