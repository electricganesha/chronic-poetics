import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./ArtistWorkPage.module.scss";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../../utils/cloudinary";

function ArtistWorkPage({ name, type, work }) {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    if (type === "poem" || type === "essay") {
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

      {type === "poem" ? (
        <div className={styles.artistWork__poetry}>
          {poems.map((poem) => (
            <ReactMarkdown key={poem}>{poem}</ReactMarkdown>
          ))}
        </div>
      ) : null}
      {type === "essay" ? (
        <div className={styles.artistWork__essay}>
          {poems.map((poem) => (
            <ReactMarkdown key={poem}>{poem}</ReactMarkdown>
          ))}
        </div>
      ) : null}
      {type === "graphic" ? (
        <div className={styles.artistWork__gallery}>
          {work.map((piece) => (
            <Image
              key={piece}
              placeholder="blur"
              blurDataURL={convertToCloudinaryBlurURL(piece)}
              src={cleanUpCloudinaryURL(piece)}
              width={960}
              height={640}
              alt={name}
              className={styles["artistWork__gallery--image"]}
            />
          ))}
        </div>
      ) : null}
      <div />
    </div>
  );
}

export default ArtistWorkPage;
