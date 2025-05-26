import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import ProductBar from './ProductBar';
import { useProduct } from '../context/ProductContext';

const Navbar = () => {
  const { categories } = useProduct();

const [menuOpen, setMenuOpen] = React.useState(false);
const handleMenuToggle = () => setMenuOpen((open) => !open);
const handleLinkClick = () => setMenuOpen(false);

return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.leftSection}>
                <div className={styles.logoIcon}>
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6_330)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white" /></clipPath>
                        </defs>
                    </svg>
                </div>
                <NavLink className={styles.navbarLogoLink} to="/">
                    <h2 className={styles.brandText}>RICANOVA</h2>
                </NavLink>
            </div>

            <button
                className={styles.hamburger}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                onClick={handleMenuToggle}
                type="button"
            >
                <span className={styles.hamburgerBar}></span>
                <span className={styles.hamburgerBar}></span>
                <span className={styles.hamburgerBar}></span>
            </button>

            <div className={`${styles.rightSection} ${menuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.navbarNavLinks}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleLinkClick}>Inicio</NavLink>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleLinkClick}>Carrito</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleLinkClick}>Sobre nosotros</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleLinkClick}>Contacto</NavLink>
                </div>
                <NavLink to="/products" className={({ isActive }) => `${styles.shopButton} ${isActive ? styles.activeLink : ''}` } onClick={handleLinkClick}>
                    Compra ahora
                </NavLink>
            </div>
        </nav>

        <ProductBar categories={categories} />
    </>
);
};

export default Navbar;
