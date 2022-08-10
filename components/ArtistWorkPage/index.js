import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./ArtistWorkPage.module.scss";

function ArtistWorkPage({ name, type, work }) {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    if (type === "text") {
      const fetchPoems = async () => {
        return Promise.all(
          work.map(async (piece) =>
            fetch(piece)
              .then((response) => response.text())
              .then((text) => {
                return text;
              })
          )
        );
      };

      fetchPoems().then((data) => {
        setPoems(data);
      });
    }
  }, [work, type]);

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
        {type === "text" ? (
          <>
            {poems.map((poem) => (
              <ReactMarkdown key={poem}>{poem}</ReactMarkdown>
            ))}
          </>
        ) : null}
      </div>
      <div />
    </div>
  );
}

export default ArtistWorkPage;
