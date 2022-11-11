import React from "react";
import MetaTags from "../../components/MetaTags";
import Link from "next/link";
import styles from "../../styles/Index.module.scss";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";
import { getAlphabet } from "../../utils/alphabet";

export default function ConditionsIndex({ conditions }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  const alphabet = getAlphabet();

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Conditions"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="conditions, list, listing"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <main className={styles.main}>
        <div className={styles.info}>
          <ul>
            {alphabet.map((letter) => (
              <div key={letter} className={styles.index}>
                <h1>{letter}</h1>
                <p>
                  {conditions
                    .filter((condition) => condition.name[0] === letter)
                    .map((condition) => (
                      <li key={condition.slug}>
                        <Link href={`/conditions/${condition.slug}`}>
                          {condition.name}
                        </Link>
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
  const conditionsDataRes = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/conditions`
  ).catch(() => {
    console.error("Error fetching conditions from API");
  });

  const conditions = await conditionsDataRes.json();

  return {
    props: {
      conditions,
    },
  };
};
