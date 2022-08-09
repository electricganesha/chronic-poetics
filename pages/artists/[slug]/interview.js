import Head from "next/head";
import styles from "../../../styles/Home.module.scss";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavigablePage from "../../../components/NavigablePage";

export default function ArtistInterviewPage({ artist }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Survey Page</title>
      </Head>
      <Navbar />
      <NavigablePage key={artist.name} artist={artist}>
        {artist.interview}
      </NavigablePage>
      <Footer />
    </div>
  );
}

ArtistInterviewPage.getInitialProps = async (req) => {
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
