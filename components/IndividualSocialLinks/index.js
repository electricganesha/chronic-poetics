import styles from "./IndividualSocialLinks.module.scss";
import Image from "next/image";

function IndividualSocialLinks({ website, instagram, instagram2 }) {
  return (
    <div className={styles.social}>
      {website ? (
        <a target="_blank" rel="noopener noreferrer" href={website}>
          <Image
            alt="Globe Icon"
            src="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660144822/chronic-poetics/icons/globe-solid.svg"
            width="16"
            height="16"
          />
        </a>
      ) : null}
      {instagram ? (
        <a target="_blank" rel="noopener noreferrer" href={instagram}>
          <Image
            alt="Instagram Icon"
            src="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660144825/chronic-poetics/icons/square-instagram-brands.svg"
            width="16"
            height="16"
          />
        </a>
      ) : null}
      {instagram2 ? (
        <a target="_blank" rel="noopener noreferrer" href={instagram2}>
          <Image
            alt="Instagram Icon"
            src="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660144825/chronic-poetics/icons/square-instagram-brands.svg"
            width="16"
            height="16"
          />
        </a>
      ) : null}
    </div>
  );
}

export default IndividualSocialLinks;
