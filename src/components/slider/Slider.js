import { useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import promo1 from "../../assets/promo1.jpg";
import promo2 from "../../assets/promo2.jpg";
import promo3 from "../../assets/promo3.jpg";
import styles from "./slider.module.css";
const Slider = () => {
  const slides = [
    {
      url: promo1,
      title: "beach",
    },
    {
      url: promo2,
      title: "boat",
    },
    {
      url: promo3,
      title: "forest",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className={styles.slider}>
      <div onClick={goToPrevious} className={styles.leftArrow}>
        <TfiArrowCircleLeft />
      </div>
      <div onClick={goToNext} className={styles.rightArrow}>
        <TfiArrowCircleRight />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      ></div>
      <div className={styles.dotsContainer}>
        {slides.map((slide, slideIndex) => (
          <div
            className={
              slideIndex === currentIndex ? styles.dot_active : styles.dot
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
