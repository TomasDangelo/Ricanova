import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'admin@ecommerce.com' && password === 'admin123') {
            navigate('/admin');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default Login;