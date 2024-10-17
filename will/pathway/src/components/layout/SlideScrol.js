import { useState, useEffect, useCallback } from 'react';
import styles from './SlideScrol.module.css';
import img1 from '../../assets/2-2.png';
import img2 from '../../assets/6-1.png';
import { Link } from 'react-router-dom';

function SlideScrol() {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <div className={styles.sliderContainer}>
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
        ‹
      </button>
      <div className={styles.imageContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
        <Link className={styles.btn}>Agende uma Consulta</Link>
      </div>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
        ›
      </button>
    </div>
  );
}

export default SlideScrol;