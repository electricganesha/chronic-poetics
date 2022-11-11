import MetaTags from "../../components/MetaTags";
import Link from "next/link";
import styles from "../../styles/Index.module.scss";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";
import { getAlphabet } from "../../utils/alphabet";

export default function ArtistsIndex({ artists }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  const alphabet = getAlphabet();

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Artists"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="artists, list, listing"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <main className={styles.main}>
        <div className={styles.info}>
          <ul style={{ padding: 0 }}>
            {alphabet.map((letter) => (
              <div key={letter} className={styles.index}>
                <h1>{letter}</h1>
                <p>
                  {artists
                    .filter((artist) => artist.name[0] === letter)
                    .map((artist) => (
                      <li key={artist.slug}>
                        {artist?.navigation?.length > 0 ? (
                          <Link href={artist.navigation[0]}>{artist.name}</Link>
                        ) : null}
                      </li>
                    ))}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/artists`).catch(
    (err) => {
      console.error("Error fetching artists from API ", err);
    }
  );

  const json = await res.json();

  return {
    props: {
      artists: json,
    },
  };
};
