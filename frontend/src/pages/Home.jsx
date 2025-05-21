import React from 'react';
import styles from '../styles/HomePage.module.css';
import Carousel from '../components/Carousel';
import { NavLink } from 'react-router-dom';

const Home = () => {
/*   const images = [
    'https://bellybaby.es/wp-content/uploads/2023/02/Kinderkraft-wozek-B-TOUR-kobieta-mezczyzna-z-wozkami.webp',
    'https://bellybaby.es/wp-content/uploads/2023/02/kinderkraft-wozek-b-tour-silver-gray-6_1.webp',
    'https://bellybaby.es/wp-content/uploads/2023/08/avionaut-sky-bellybaby-1-600x397.webp'
  ]; */

  return (
    <div className={styles.homeContainer}>

        <div>
      <h2 className={styles.welcomeText}>Bienvenido a</h2>
      <h1 className={styles.homeTitle}>Ricanova.</h1>
        </div>

      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Dale lo mejor a tu bebé</h1>
          <p>Descubre nuestra gama de portabebés diseñados para la comodidad, seguridad y estilo. Mantén a tu bebé cerca y tus manos libres.</p>
          <NavLink to="/products" className={styles.shopButton}>Comprar Ahora</NavLink>
        </div>
      </div>

      {/* <Carousel images={images} /> */}

      <section className={styles.featuredSection}>
        <h2>Nuestros portabebés destacados</h2>
        <div className={styles.featuredList}>
          {[
            {
              name: "Portabebés Ergonomico",
              description: "Diseñado para la comodidad y seguridad de su bebé.",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArvkJIJvAajFyemhYaYEV1PXOnhsIdUG7n6zV-wN4MzOHv_1SlsOdPiiWjHPFREA-iKAVR3Z-EIIeVlk_sPa5Golj8yhyi022q2UAt8weseo14mJC0g5EB69r8gqn2wtFuvZX9MsbYcwKh543I7XFPLtPUCH5Zp1rxrQ76LM1bfM395dfaM08_s3QP3ZWKJjJSgnzGPRSA85DugHosyom_tOex3PKoqwc2PrhGZlzC8rLpjQqJvIGDqfM5oVsQxNUU-87zMmmPMM5H"
            },
            {
              name: "Portabebés activo",
              description: "Diseñado para padres activos, dando soporte, comididad y flexibilidad para moverse.",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcyJ2CGiRcTIIko3GUkt0M3xFWH7cGXvKZtUr-cQu5hb-jGXluDOmkofPghmxHidgMGfIa6yDv54mEXCQdrIiL-C8wOEkD37hSjFybl5Wk0V3Xg9P2j7GJAim_S2n5_U8xG3DFOWMg76ykMk9WAvJ-jHACgX23HwoOzHQpaRTdlFTH6Q5fCxgIsFZNb1p9E2Oy1NBV4z9CTWCc1DPV-pC5MXDI8P2L-yxfpSakbkcBgEkjxunPCLyxKreCKtGaj4R4RD5WMN7FaqWs"
            },
            {
              name: "Portabebés clásico",
              description: "Diseño clasico, que combina estilo y comfort",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbSHGpnlplPQ9bQXauf8lsVMwC3H-sAluS03VFFIoPOzr1HeLvmmcyaWUzWe53DFrADye9htl-2z5Q1psGXNVkoEnMC5a3HlVbv_DqbHhrFbDGiJ9belM_NPvvbiaef8cQQYrUhVqwnIVZXupTkZjIUgMx-ydUbPg_Sx4xolSFBPpL4JkN3uzmvSEKE21bcw2SNygZKf_fc6cs-HsakZ5Zen06HihKBnWCBb3O6g4nLz0DDqiL7MhbQ-hRQxiYQ5vxoaECio3dsp5i"
            }
          ].map((item, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureImage} style={{ backgroundImage: `url(${item.image})` }} />
              <div>
                <p className={styles.featureTitle}>{item.name}</p>
                <p className={styles.featureDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <h2>¿Por qué elegir Ricanova?</h2>
        <p>Nuestros portabebés están diseñados pensando en la comodidad y seguridad de su bebé, lo que le permite explorar el mundo juntos.</p>
        <div className={styles.benefitsList}>
          {[
            {
              icon: '❤️',
              title: 'Comfort',
              text: 'Diseño ergonómico para la comodidad de su bebé en todo momento.'
            },
            {
              icon: '🛡️',
              title: 'Seguridad',
              text: 'Rigurosas medidas de seguridad testeadas para que su bebé esté siempre seguro'
            },
            {
              icon: '⭐',
              title: 'Calidad',
              text: 'Hecho con los mejores materiales para asegurar la mejor calidad de su producto'
            }
          ].map((benefit, i) => (
            <div key={i} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
