import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';
import Carousel from '../components/Carousel';

const Home = () => {
    const navigate = useNavigate();
    const images = [
        'https://bellybaby.es/wp-content/uploads/2023/02/Kinderkraft-wozek-B-TOUR-kobieta-mezczyzna-z-wozkami.webp',
        'https://bellybaby.es/wp-content/uploads/2023/02/kinderkraft-wozek-b-tour-silver-gray-6_1.webp',
        'https://bellybaby.es/wp-content/uploads/2023/08/avionaut-sky-bellybaby-1-600x397.webp'
    ]
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.homeTitle}>Bienvenido a BabyCarts</h1>
            <p className={styles.productText}>Explora nuestra selección de coches de bebé de alta calidad.</p>
            <div className={styles.buttonGroup}>
                <button className={styles.primaryButton} onClick={() => navigate('/products')}>Ver Productos</button>
                <button className={styles.secondaryButton} onClick={() => navigate('/login')}>Iniciar Sesión</button>
            </div>
            <Carousel images={images}/>
        </div>
    );
};

export default Home;