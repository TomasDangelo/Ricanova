import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
 

      <section className={styles.section}>
        <h1>Nuestra Misión</h1>
        <p>
          En Ricanova, nuestra misión es facilitar la crianza de los hijos, ofreciendo productos seguros, cómodos y de alta calidad que permitan a los padres mantener a sus bebés
          cerca mientras disfrutan de su día a día. Nos esforzamos por crear soluciones innovadoras que se adapten a las necesidades de las familias modernas.
        </p>
      </section>

      <section className={styles.section}>
        <h1>Nuestros Valores</h1>
        <p>
          La seguridad, la comodidad y la calidad son los pilares de Ricanova. Nos comprometemos a utilizar materiales seguros y duraderos, diseñando productos que prioricen el
          bienestar del bebé y la comodidad del cuidador. Además, valoramos la innovación y la mejora continua para superar las expectativas de nuestros clientes.
        </p>
      </section>

      <section className={styles.section}>
        <h1>Nuestra Historia</h1>
        <p>
          Ricanova nació del deseo de una madre de encontrar un portabebé que combinara funcionalidad, estilo y seguridad. Tras no encontrar lo que buscaba en el mercado, decidió
          crear su propia marca, enfocada en ofrecer productos que no solo cumplieran con los estándares de seguridad más altos, sino que también reflejaran la belleza y la alegría
          de la maternidad y paternidad.
        </p>
      </section>
    </div>
  );
};

export default About;
