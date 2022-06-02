import React, {useState} from "react";
import styles from "./ArtistHeader.module.scss";
import Image from "next/image";
import QRCode from "qrcode";
import Link from "next/link";

const ArtistHeader = ({artist, pieces}) => {
  const [qrCodeUrl, setqrCodeUrl] = useState(null);

  QRCode.toDataURL(`${process.env.NEXT_PUBLIC_HOST}/artists/${artist.slug}`)
    .then(url => {
      setqrCodeUrl(url);
    })
    .catch(err => {
      console.error(err);
    });

  const conditions =
    artist.conditions.length > 1
      ? artist.conditions.map((condition, index) =>
          <React.Fragment key={index}>
            <Link href={`/conditions/${condition.slug}`}>
              {condition.name}
            </Link>{" "}
            {index !== artist.conditions.length - 1 && " and "}
          </React.Fragment>
        )
      : artist.conditions.map((condition, index) =>
          <Link key={index} href={`/conditions/${condition.slug}`}>
            {condition.name}
          </Link>
        );

  return (
    <div className={styles.header}>
      <div>
        <h1>
          {artist.name}{" "}
          {qrCodeUrl
            ? <Image src={qrCodeUrl} alt="QR Code" width="64" height="64" />
            : null}
        </h1>
        <span>
          suffers from {conditions}
        </span>
        <ul>
          {artist.name.split(" ")[0]}&apos;s work:
          {pieces.map(piece =>
            <li key={piece.slug}>
              <Link href={`/pieces/${piece.slug}`}>
                {piece.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ArtistHeader;
