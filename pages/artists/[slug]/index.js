import Head from "next/head";
import React from "react";
import styles from "../../../styles/Home.module.scss";
import ArtistIntroPage from "../../../components/ArtistIntroPage";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavigablePage from "../../../components/NavigablePage";

export default function ArtistPage({ artist }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Artist Page</title>
      </Head>
      <Navbar />
      <div className={styles.artist__container}>
        <NavigablePage key={artist.name} artist={artist}>
          <ArtistIntroPage
            name={artist.name}
            bio={artist.bio}
            photo={artist.photo}
            website={artist.website}
            instagram={artist.instagram}
          />
        </NavigablePage>
      </div>
      <Footer />
    </div>
  );
}

ArtistPage.getInitialProps = async (req) => {
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
