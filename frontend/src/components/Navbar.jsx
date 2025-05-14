import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <NavLink to="/">RICANOVA</NavLink>
            </div>
            <div className={styles.navbarNavLinks} >
                <NavLink to="/" className={({isActive}) => isActive? styles.activeLink : styles.link}>
                    Inicio
                </NavLink>
                <NavLink to="/products" className={({isActive}) => isActive? styles.activeLink : styles.link}>
                    Productos
                </NavLink>
                <NavLink to="/cart" className={({isActive}) => isActive? styles.activeLink : styles.link} >
                    Carrito
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive? styles.activeLink : styles.link} >
                    Sobre Nosotros
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive? styles.activeLink : styles.link} >
                    Contacto
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;