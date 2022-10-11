import Image from "next/image";
import styles from "./Footer.module.scss";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";
import cc from "classcat";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          <span>A project by</span>
          <a
            href="https://pointpositive.weebly.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Point Positive Publishing
          </a>
          <span>&nbsp;and&nbsp;</span>
          <a
            href="https://www.collidinglines.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: 12 }}
          >
            Colliding Lines
          </a>
          &nbsp;
          <div className={styles.footer__division}>Buy the book</div>
          <div className={styles.footer__division}>
            All Rights Reserved &#169;
          </div>
        </div>
        <Image
          placeholder="blur"
          blurDataURL={convertToCloudinaryBlurURL(
            "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1665511512/chronic-poetics/logos/arts-council-logo.png"
          )}
          src={cleanUpCloudinaryURL(
            "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1665511512/chronic-poetics/logos/arts-council-logo.png"
          )}
          alt="Arts Council Logo"
          width="260"
          height="70"
        />
      </div>
    </footer>
  );
}

export default Footer;
