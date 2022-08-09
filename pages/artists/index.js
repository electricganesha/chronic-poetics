import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.scss";

export default function Artists({ artists }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Artists</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Artists</h1>
        <div className={styles.info}>
          <ul style={{ padding: 0 }}>
            {artists.map((artist) => (
              <li
                key={artist.slug}
                style={{
                  margin: "auto",
                  padding: "16px 0",
                  borderBottom: "1px dotted black",
                  maxWidth: "360px",
                }}
              >
                <Link href={`/artists/${artist.slug}`}>{artist.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

Artists.getInitialProps = async () => {
  console.log(`${process.env.NEXT_PUBLIC_HOST}/api/artists`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/artists`).catch(
    (err) => {
      console.error("Error fetching artists from API ", err);
    }
  );

  const json = await res.json();

  return {
    artists: json,
  };
};
