import React from "react";
import Image from "next/image";
import styles from "./ArtistWorkPage.module.scss";

function ArtistWorkPage({ name, type, work }) {
  return (
    <div className={styles.artistWork}>
      <div className={styles.artistWork__title}>
        <h1>{name}</h1>
      </div>
      <div className={styles.artistWork__gallery}>
        {type === "graphic" ? (
          <>
            {work.map((piece) => (
              <Image
                key={piece}
                src={piece}
                width={360}
                height={480}
                alt={name}
                className={styles["artistWork__gallery--image"]}
              />
            ))}
          </>
        ) : null}
      </div>
      <div />
    </div>
  );
}

export default ArtistWorkPage;
