import React, {useState} from "react";
import styles from "./NavigablePage.module.scss";
import Image from "next/image";
import {useRouter} from "next/router";
import Transition from "../Transition";
const ANIMATION_X_TRANSFORM = 200;

const NavigablePage = ({slug, numPages, currentPage, children}) => {
  const router = useRouter();

  const [xValue, setXValue] = useState(ANIMATION_X_TRANSFORM);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
    e.preventDefault();
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    if (touchStart - touchEnd > 150) {
      navigateRight(e);
    }

    if (touchStart - touchEnd < -150) {
      navigateLeft(e);
    }
  }

  const navigateLeft = e => {
    if (currentPage <= 1) {
      return;
    }

    e.preventDefault();
    setXValue(ANIMATION_X_TRANSFORM);
    router.push(`/p/${slug}?p=${parseInt(currentPage) - 1}`);
  };

  const navigateRight = e => {
    if (currentPage >= numPages) {
      return;
    }

    e.preventDefault();
    setXValue(-ANIMATION_X_TRANSFORM);
    router.push(`/p/${slug}?p=${parseInt(currentPage) + 1}`);
  };

  return (
    <div
      className={styles.wrapper}
      onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      onTouchEnd={touchEndEvent => handleTouchEnd(touchEndEvent)}
    >
      <div
        className={styles.wrapper__leftArrow}
        onClick={event => navigateLeft(event)}
      >
        {currentPage > 1
          ? <Image
              src="/left-chevron.png"
              alt="Arrow Left"
              width="32"
              height="32"
            />
          : null}
      </div>
      <Transition xValue={xValue}>
        <div className={styles.wrapper__content}>
          {children}
        </div>
      </Transition>
      <div
        className={styles.wrapper__rightArrow}
        onClick={event => navigateRight(event)}
      >
        {currentPage < numPages
          ? <Image
              src="/right-chevron.png"
              alt="Arrow Right"
              width="32"
              height="32"
            />
          : null}
      </div>
    </div>
  );
};

export default NavigablePage;
