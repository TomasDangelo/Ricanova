import React, { useState } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselItem} ${
            index === currentIndex ? styles.active : ''
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <button className={styles.carouselControlPrev} onClick={handlePrev}>
        ‹
      </button>
      <button className={styles.carouselControlNext} onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
