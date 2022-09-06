import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./NavigablePage.module.scss";
import Transition from "../Transition";

const ANIMATION_X_TRANSFORM = 200;

function NavigablePage({ artist, children }) {
  const router = useRouter();
  const numPages = artist.navigation.length;
  const currentPage = artist.navigation.indexOf(router.asPath) + 1;

  const [xValue, setXValue] = useState(ANIMATION_X_TRANSFORM);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const navigateLeft = (e) => {
    if (currentPage <= 1 || currentPage === -1) {
      return;
    }

    e.preventDefault();
    setXValue(ANIMATION_X_TRANSFORM);
    router.push(artist.navigation[currentPage - 2]);
  };

  const navigateRight = (e) => {
    if (currentPage >= numPages || currentPage === -1) {
      return;
    }

    e.preventDefault();
    setXValue(-ANIMATION_X_TRANSFORM);
    router.push(artist.navigation[currentPage]);
  };

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

  return (
    <div
      className={styles.wrapper}
      onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
      onTouchEnd={(touchEndEvent) => handleTouchEnd(touchEndEvent)}
    >
      <button
        type="button"
        className={styles.wrapper__leftArrow}
        onClick={(event) => navigateLeft(event)}
      >
        {currentPage > 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        ) : null}
      </button>
      <Transition xValue={xValue}>
        <div className={styles.wrapper__content}>{children}</div>
      </Transition>
      <button
        type="button"
        className={styles.wrapper__rightArrow}
        onClick={(event) => navigateRight(event)}
      >
        {currentPage < numPages ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        ) : null}
      </button>
    </div>
  );
}

export default NavigablePage;
