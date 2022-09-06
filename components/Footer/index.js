import Image from "next/image";
import styles from "./Footer.module.scss";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";

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
        &nbsp;- All Rights Reserved &#169;
      </div>
      <Image
        placeholder="blur"
        blurDataURL={convertToCloudinaryBlurURL(
          "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/arts-council-logo.png"
        )}
        src={cleanUpCloudinaryURL(
          "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/arts-council-logo.png"
        )}
        alt="Arts Council Logo"
        width="260"
        height="70"
      />
    </footer>
  );
}

export default Footer;
