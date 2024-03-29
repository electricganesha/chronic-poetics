import { useState, useRef, useEffect } from "react";
import ResponsiveMenu from "react-responsive-navbar";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import cc from "classcat";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const menuCloseButtonRef = useRef(null);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const path = router.asPath.split("/")[1] || "home";
    setActiveItem(path);
  }, [router]);

  const clickedOnItem = (item) => {
    setActiveItem(item);
    menuCloseButtonRef?.current?.click();
  };

  return (
    <div className={styles.wrapper}>
      <ResponsiveMenu
        menuOpenButton={
          <button className="hamburger hamburger--squeeze" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        }
        menuCloseButton={
          <button
            ref={menuCloseButtonRef}
            className="hamburger hamburger--squeeze is-active"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        }
        changeMenuOn="768px"
        largeMenuClassName={styles.menu__large}
        smallMenuClassName={styles.menu__small}
        menu={
          <ul className={styles.navbar__list}>
            <li
              className={cc([
                styles.navbar__item,
                styles["navbar__item--first"],
                activeItem === "home" ? styles["navbar__item--active"] : null,
              ])}
              onClick={() => clickedOnItem("home")}
            >
              <Link href="/">Chronic Poetics</Link>
            </li>
            <div className={styles.navbar__subList}>
              <li
                className={cc([
                  styles.navbar__item,
                  activeItem === "about"
                    ? styles["navbar__item--active"]
                    : null,
                ])}
                onClick={() => clickedOnItem("about")}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={cc([
                  styles.navbar__item,
                  activeItem === "book" ? styles["navbar__item--active"] : null,
                ])}
                onClick={() => clickedOnItem("book")}
              >
                <a
                  href="https://collidinglines.bigcartel.com/product/chronic-poetics"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book
                </a>
              </li>
              <li
                className={cc([
                  styles.navbar__item,
                  activeItem === "artists"
                    ? styles["navbar__item--active"]
                    : null,
                ])}
                onClick={() => clickedOnItem("artists")}
              >
                <Link href="/artists">Artists</Link>
              </li>
              <li
                className={cc([
                  styles.navbar__item,
                  activeItem === "conditions"
                    ? styles["navbar__item--active"]
                    : null,
                ])}
                onClick={() => clickedOnItem("conditions")}
              >
                <Link href="/conditions">Conditions</Link>
              </li>

              <li
                className={cc([
                  styles.navbar__item,
                  styles["navbar__item--last"],
                  activeItem === "findings"
                    ? styles["navbar__item--active"]
                    : null,
                ])}
                onClick={() => clickedOnItem("findings")}
              >
                <Link href="/findings">Findings</Link>
              </li>
            </div>
          </ul>
        }
      />
    </div>
  );
}

export default Navbar;
