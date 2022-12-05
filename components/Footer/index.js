import Image from "next/image";
import styles from "./Footer.module.scss";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          <span>A Project by&nbsp;</span>
          <a
            href="https://pointpositive.weebly.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Point Positive Publishing
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
          <div className={styles.footer__division}>
            <Link
              href={`/book`}
              target="_self"
              rel="noopener noreferrer"
              style={{ marginRight: 12 }}
            >
              Buy the book
            </Link>
          </div>
          <div className={styles.footer__division}>
            All Rights Reserved &#169;
          </div>
        </div>
        <Link passHref href="https://www.artscouncil.org.uk/">
          <a target="_blank">
            <Image
              placeholder="blur"
              blurDataURL={convertToCloudinaryBlurURL(
                "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1665511512/chronic-poetics/logos/arts-council-logo.png"
              )}
              src={cleanUpCloudinaryURL(
                "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1665511512/chronic-poetics/logos/arts-council-logo.png"
              )}
              alt="Arts Council Logo"
              width="156"
              height="40"
            />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
