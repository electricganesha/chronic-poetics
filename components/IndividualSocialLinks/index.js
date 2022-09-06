import styles from "./IndividualSocialLinks.module.scss";
import Image from "next/image";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";

function IndividualSocialLinks({ website, instagram, instagram2 }) {
  const instagramIcon = (
    <Image
      alt="Instagram Icon"
      src={cleanUpCloudinaryURL(
        "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660144825/chronic-poetics/icons/square-instagram-brands.svg"
      )}
      width="16"
      height="16"
    />
  );

  const globeIcon = (
    <Image
      alt="Globe Icon"
      src={cleanUpCloudinaryURL(
        "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660144822/chronic-poetics/icons/globe-solid.svg"
      )}
      width="16"
      height="16"
    />
  );

  return (
    <div className={styles.social}>
      {website ? (
        <a target="_blank" rel="noopener noreferrer" href={website}>
          {globeIcon}
        </a>
      ) : null}
      {instagram ? (
        <a target="_blank" rel="noopener noreferrer" href={instagram}>
          {instagramIcon}
        </a>
      ) : null}
      {instagram2 ? (
        <a target="_blank" rel="noopener noreferrer" href={instagram2}>
          {instagramIcon}
        </a>
      ) : null}
    </div>
  );
}

export default IndividualSocialLinks;
