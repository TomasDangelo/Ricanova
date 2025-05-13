import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Footer.module.css'
const Footer = () => {

  return (
    <footer className={styles.footerCont}>
        <div>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/contact">Contacto</Link>   
      <Link to="/cart">Carrito</Link>   
        </div>
      <p> &copy; {new Date().getFullYear()} Ricanova. Todos los derechos reservados.</p>
      <p>Siguenos en redes sociales!</p>  
   
    </footer>
  )
}

export default Footer
