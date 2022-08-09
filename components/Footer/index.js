import Image from "next/image";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.collidinglines.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Colliding Lines{" "}
      </a>
      &nbsp;/&nbsp;
      <a
        href="https://pointpositive.weebly.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Point Positive Publishing
      </a>{" "}
      - All Rights Reserved &#169;
      <Image
        src="/logos/arts_council_logo.png"
        alt="Arts Council Logo"
        width="260"
        height="70"
      />
    </footer>
  );
}

export default Footer;
