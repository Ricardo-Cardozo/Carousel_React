import styles from "./Slider.module.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      className={
        direction === styles.next
          ? `${styles.btn_slide} ${styles.next}`
          : `${styles.btn_slide} ${styles.prev}`
      }
      onClick={moveSlide}
    >
      <img
        src={direction === styles.next ? rightArrow : leftArrow}
        alt="Prev slide"
      />
    </button>
  );
};

export default BtnSlider;
