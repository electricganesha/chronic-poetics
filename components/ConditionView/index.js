import React from "react";
import Link from "next/link";
import styles from "./ConditionView.module.scss";
import { removeDuplicates } from "../../utils/array";

function ConditionView({ condition, pieces }) {
  const cleanPieces = removeDuplicates(pieces, "name");

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
            <h3>Symptoms</h3>
            <ul>
              {condition.symptoms.map((symptom) => (
                <li key={symptom.name}>
                  <Link href={symptom.link}>{symptom.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {condition.pieces && (
          <div className={styles.condition__pieces}>
            <h3>Related Artists&apos; works</h3>
            <ul>
              {cleanPieces.map((piece) => (
                <li key={piece.name}>
                  <Link href={`/artists/${piece.artistSlug}/pieces`}>
                    {piece.name}
                  </Link>
                </li>
              ))}
            </ul>
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
