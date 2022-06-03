import React from "react";
import styles from "./ConditionView.module.scss";

import Link from "next/link";

const ConditionView = ({condition}) => {
  return (
    <div className={styles.condition}>
      <h1>
        {condition.name}
      </h1>
      <p className={styles.condition__description}>
        {condition.description}
        {condition.source &&
          <blockquote
            cite={condition.source.link}
            className={styles.condition__source}
          >
            Source:{" "}
            <Link href={condition.source.link}>{condition.source.name}</Link>
          </blockquote>}
      </p>
      <div className={styles.condition__info}>
        {condition.symptoms &&
          <div>
            <p>Symptoms:</p>
            {condition.symptoms.map((symptom, index) =>
              <p key={index}>
                <Link href={symptom.link}>
                  {symptom.name}
                </Link>
              </p>
            )}
          </div>}
        {condition.artists &&
          <div className={styles.condition__artists}>
            <p>
              Artists suffering from {condition.name}:
            </p>
            {condition.artists.map(artist =>
              <Link key={artist.slug} href={`/artists/${artist.slug}`}>
                {artist.name}
              </Link>
            )}
          </div>}
      </div>
      {condition.wiki &&
        <Link href={condition.wiki}>More information on Wikipedia</Link>}
    </div>
  );
};

export default ConditionView;
