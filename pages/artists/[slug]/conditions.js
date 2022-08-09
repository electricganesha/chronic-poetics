import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import ConditionView from "../../../components/ConditionView";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavigablePage from "../../../components/NavigablePage";
import { populatePiecesArrayWithArtistSlug } from "../../../utils/populate";

export default function ArtistConditionsPage({ artist, pieces }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Condition Page</title>
      </Head>
      <Navbar />
      <NavigablePage key={artist.name} artist={artist}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {artist.conditions.data.map((condition) => (
            <ConditionView
              key={condition.name}
              condition={condition}
              pieces={pieces}
            />
          ))}
        </div>
      </NavigablePage>
      <Footer />
    </div>
  );
}

ArtistConditionsPage.getInitialProps = async (req) => {
  const artistDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artist = await artistDataRequest.json();

  const mappedPieces = artist.conditions.data.map(async (condition) => {
    const fetchedPiece = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/pieces/condition/${condition.id}`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });

    return fetchedPiece.json();
  });

  const pieces = await Promise.all(mappedPieces);

  return {
    artist,
    pieces: populatePiecesArrayWithArtistSlug(
      pieces.map((piece) => piece[0]),
      [artist]
    ),
  };
};
