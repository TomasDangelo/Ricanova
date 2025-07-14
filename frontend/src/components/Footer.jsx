import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerCont}>
            <div className={styles.footerLeft}>
                <p>&copy; {new Date().getFullYear()} Ricanova. Todos los derechos reservados.</p>
                <p>Desarrollado por Tomás D'Angelo</p>
            </div>

        </footer>
    );
};

export default Footer;
