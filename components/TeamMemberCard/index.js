import React from "react";
import Image from "next/image";
import styles from "./TeamMemberCard.module.scss";
import IndividualSocialLinks from "../IndividualSocialLinks";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";

function TeamMemberCard({
  photo,
  name,
  job,
  bio,
  website,
  instagram,
  instagram2,
}) {
  return (
    <div className={styles.member}>
      {photo ? (
        <Image
          src={cleanUpCloudinaryURL(photo)}
          placeholder="blur"
          blurDataURL={convertToCloudinaryBlurURL(photo)}
          alt={`Team photo for ${name}`}
          width="240"
          height="240"
        />
      ) : null}
      <div className={styles.member__name}>{name}</div>
      <div className={styles.member__role}>{job}</div>
      <div>
        <IndividualSocialLinks
          website={website}
          instagram={instagram}
          instagram2={instagram2}
        />
      </div>
      <div className={styles.member__bio}>{bio}</div>
    </div>
  );
}

export default TeamMemberCard;
