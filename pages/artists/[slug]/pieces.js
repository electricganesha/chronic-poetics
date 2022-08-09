import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavigablePage from "../../../components/NavigablePage";
import ArtistWorkPage from "../../../components/ArtistWorkPage";

export default function ArtistPiecesPage({ artist }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Piece Page</title>
      </Head>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavigablePage key={artist.name} artist={artist}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {artist.pieces.data.map((piece) => (
              <ArtistWorkPage
                key={piece.name}
                name={piece.name}
                type={piece.typeOfWork}
                work={piece.work}
              />
            ))}
          </div>
        </NavigablePage>
      </div>
      <Footer />
    </div>
  );
}

ArtistPiecesPage.getInitialProps = async (req) => {
  const artistDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artist = await artistDataRequest.json();

  return {
    artist,
  };
};
