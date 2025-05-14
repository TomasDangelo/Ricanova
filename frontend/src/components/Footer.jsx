import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerCont}>
            <div className={styles.footerLeft}>
                <p>&copy; {new Date().getFullYear()} Ricanova. Todos los derechos reservados.</p>
                <p>Síguenos en redes sociales!</p>
            </div>
            <div className={styles.linksCont}>
                <Link to="/">Inicio</Link>
                <Link to="/products">Productos</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/cart">Carrito</Link>
            </div>
        </footer>
    );
};

export default Footer;
