import React, { useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";
import Link from "next/link";
import styles from "./ArtistHeader.module.scss";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../utils/cloudinary";

function ArtistHeader({ artist, pieces, conditions }) {
  const [qrCodeUrl, setqrCodeUrl] = useState(null);

  QRCode.toDataURL(`${process.env.NEXT_PUBLIC_HOST}/artists/${artist.slug}`)
    .then((url) => {
      setqrCodeUrl(url);
    })
    .catch((err) => {
      console.error(err);
    });

  const mappedConditions =
    conditions.length > 1
      ? conditions.map((condition, index) => (
          <React.Fragment key={condition.slug}>
            <Link href={`/conditions/${condition.slug}`}>{condition.name}</Link>{" "}
            {index !== conditions.length - 1 && " and "}
          </React.Fragment>
        ))
      : conditions.map((condition) => (
          <Link key={condition.slug} href={`/conditions/${condition.slug}`}>
            {condition.name}
          </Link>
        ));

  return (
    <div className={styles.header}>
      <div>
        <h1>
          {artist.name}{" "}
          {qrCodeUrl ? (
            <Image src={qrCodeUrl} alt="QR Code" width="64" height="64" />
          ) : null}
        </h1>
        <span>suffers from {mappedConditions}</span>
        <ul>
          {artist.name.split(" ")[0]}&apos;s work:
          {pieces.map((piece) => (
            <li key={piece.slug}>
              <Link href={`/pieces/${piece.slug}`}>{piece.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArtistHeader;
