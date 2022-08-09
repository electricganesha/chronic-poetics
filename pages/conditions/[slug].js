import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import ConditionView from "../../components/ConditionView";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { populatePiecesArrayWithArtistSlug } from "../../utils/populate";

export default function ConditionPage({ condition, pieces }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Condition Page</title>
      </Head>
      <Navbar />
      <ConditionView condition={condition} pieces={pieces} />
      <Footer />
    </div>
  );
}

ConditionPage.getInitialProps = async (req) => {
  const conditionDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/conditions/${req.query.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const condition = await conditionDataRequest.json();

  const piecesDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/pieces/condition/${condition.id}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const pieces = await piecesDataRequest.json();

  const mappedArtists = pieces.map(async (piece) => {
    const fetchedArtist = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/artists/piece/${piece.id}`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });

    return fetchedArtist.json();
  });

  const artists = await Promise.all(mappedArtists);

  const mappedPieces = populatePiecesArrayWithArtistSlug(pieces, artists);
  return {
    condition,
    pieces: mappedPieces,
  };
};
