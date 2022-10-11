import ResponsiveMenu from "react-responsive-navbar";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import cc from "classcat";

function Navbar() {
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
            className="hamburger hamburger--squeeze is-active"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        }
        changeMenuOn="500px"
        largeMenuClassName={styles.menu__large}
        smallMenuClassName={styles.menu__small}
        menu={
          <ul className={styles.navbar__list}>
            <li
              className={cc([
                styles.navbar__item,
                styles["navbar__item--first"],
              ])}
            >
              <Link href="/">Chronic Poetics</Link>
            </li>
            <div className={styles.navbar__subList}>
              <li className={styles.navbar__item}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.navbar__item}>
                <Link href="/book">Book</Link>
              </li>
              <li className={styles.navbar__item}>
                <Link href="/artists">Artists</Link>
              </li>
              <li className={styles.navbar__item}>
                <Link href="/conditions">Conditions</Link>
              </li>

              <li className={styles.navbar__item}>
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
