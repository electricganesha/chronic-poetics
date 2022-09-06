import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./NavigablePage.module.scss";
import Transition from "../Transition";

function NavigablePage({ artist, children }) {
  const router = useRouter();
  const numPages = artist.navigation.length;
  const currentPage = artist.navigation.indexOf(router.asPath) + 1;

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const navigateLeft = (e) => {
    e.preventDefault();
    if (currentPage <= 1 || currentPage === -1) {
      return;
    }

    router.push(artist.navigation[currentPage - 2]);
  };

  const navigateRight = (e) => {
    e.preventDefault();
    if (currentPage >= numPages || currentPage === -1) {
      return;
    }

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
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.wrapper__leftArrow}
        onClick={navigateLeft}
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
      <Transition>
        <div
          className={styles.wrapper__content}
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={(touchEndEvent) => handleTouchEnd(touchEndEvent)}
        >
          {children}
        </div>
      </Transition>
      <button
        type="button"
        className={styles.wrapper__rightArrow}
        onClick={navigateRight}
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
