import MetaTags from "../../components/MetaTags";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.scss";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";

export default function ArtistsIndex({ artists }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Artists"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="artists, list, listing"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
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

export const getStaticProps = async () => {
  const res = await fetch(
    "https://chronic-poetics.vercel.app/api/artists"
  ).catch((err) => {
    console.error("Error fetching artists from API ", err);
  });

  const json = await res.json();

  return {
    props: {
      artists: json,
    },
  };
};
