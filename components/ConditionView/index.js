import React from "react";
import Link from "next/link";
import styles from "./ConditionView.module.scss";

function ConditionView({ condition, pieces }) {
  return (
    <div className={styles.condition}>
      <h1>{condition.name}</h1>
      <p className={styles.condition__description}>
        {condition.description}
        {condition.source && (
          <blockquote
            cite={condition.source.link}
            className={styles.condition__source}
          >
            Source:{" "}
            <Link href={condition.source.link}>{condition.source.name}</Link>
          </blockquote>
        )}
      </p>
      <div className={styles.condition__info}>
        {condition.symptoms && (
          <div>
            <p>Symptoms:</p>
            {condition.symptoms.map((symptom) => (
              <p key={symptom.name}>
                <Link href={symptom.link}>{symptom.name}</Link>
              </p>
            ))}
          </div>
        )}
        {condition.pieces && (
          <div className={styles.condition__pieces}>
            <p>Pieces relating to {condition.name}:</p>
            {pieces.map((piece) => (
              <Link
                key={piece.name}
                href={`/artists/${piece.artistSlug}/pieces`}
              >
                {piece.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      {condition.wiki && (
        <Link href={condition.wiki}>More information on Wikipedia</Link>
      )}
    </div>
  );
}

export default ConditionView;
