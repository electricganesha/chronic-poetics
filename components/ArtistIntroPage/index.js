import Image from "next/image";
import IndividualSocialLinks from "../IndividualSocialLinks";
import styles from "./ArtistIntroPage.module.scss";

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
        <Image
          className={styles.artistIntro__photo}
          src={photo}
          alt={`${name} Profile Picture`}
          width="240"
          height="240"
        />
      ) : null}
      {photoCredit ? (
        <p className={styles.artistIntro__photoCredit}>
          Photo by: {photoCredit}
        </p>
      ) : null}
      {bio ? <p className={styles.artistIntro__bio}>{bio}</p> : null}
      <IndividualSocialLinks website={website} instagram={instagram} />
    </div>
  );
}

export default ArtistIntroPage;
