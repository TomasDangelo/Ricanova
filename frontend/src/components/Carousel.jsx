import React from 'react';
import styles from './Carousel.module.css'; // Assuming you have a CSS module for styles

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carouselInner}>
                <div className={`${styles.carouselItem} ${styles.active}`}>Item 1</div>
                <div className={styles.carouselItem}>Item 2</div>
                <div className={styles.carouselItem}>Item 3</div>
            </div>
            <button className={styles.carouselControlPrev}>‹</button>
            <button className={styles.carouselControlNext}>›</button>
        </div>
    );
};

export default Carousel;