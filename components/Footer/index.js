import Image from "next/image";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
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
      </div>
      <Image
        src="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/arts-council-logo.png"
        alt="Arts Council Logo"
        width="260"
        height="70"
      />
    </footer>
  );
}

export default Footer;
