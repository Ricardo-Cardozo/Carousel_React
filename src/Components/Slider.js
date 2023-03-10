import { useState } from "react";
import styles from "./Slider.module.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container_slider}>
      {dataSlider.map((obj, index) => (
        <div
          key={obj.id}
          className={
            slideIndex === index + 1
              ? `${styles.slide} ${styles.active_anim}`
              : styles.slide
          }
        >
          <img src={`../../Imgs/img${index + 1}.jpg`} alt="Imagens Carrosel" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={styles.next} />
      <BtnSlider moveSlide={prevSlide} direction={styles.prev} />
      <div className={styles.container_dots}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? `${styles.dot} ${styles.active}`
                : styles.dot
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
