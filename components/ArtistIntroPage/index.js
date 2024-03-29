import Image from "next/image";
import IndividualSocialLinks from "../IndividualSocialLinks";
import styles from "./ArtistIntroPage.module.scss";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";

function ArtistIntroPage({
  name,
  bio,
  photo,
  photoCredit,
  website,
  instagram,
}) {
  return (
    <div className={styles.artistIntro}>
      <h1 className={styles.artistIntro__name}>{name}</h1>
      {photo ? (
        <div className={styles.artistIntro__photo}>
          <Image
            placeholder="blur"
            blurDataURL={convertToCloudinaryBlurURL(photo)}
            src={cleanUpCloudinaryURL(photo)}
            alt={`${name} Profile Picture`}
            width="360"
            height="360"
          />
        </div>
      ) : null}
      {bio ? (
        <p className={styles.artistIntro__bio}>
          {bio}
          <div className={styles.artistIntro__bioExtra}>
            <IndividualSocialLinks website={website} instagram={instagram} />
            {photoCredit ? (
              <p className={styles.artistIntro__photoCredit}>
                Photo by: {photoCredit}
              </p>
            ) : null}
          </div>
        </p>
      ) : null}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <></>
      </div>
    </div>
  );
}

export default ArtistIntroPage;
