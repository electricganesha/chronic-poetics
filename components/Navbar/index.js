import ResponsiveMenu from "react-responsive-navbar";
import Link from "next/link";
import styles from "./Navbar.module.scss";

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
            <li className={styles.navbar__item}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/artists">Artists</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/conditions">Conditions</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/book">Book</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/findings">Findings</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        }
      />
    </div>
  );
}

export default Navbar;
