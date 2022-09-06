import React from "react";
import MetaTags from "../../components/MetaTags";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";

export default function ConditionsIndex({ conditions }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Conditions"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="conditions, list, listing"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <Navbar />
      <main className={styles.main}>
        <h1>Conditions</h1>
        <div className={styles.info}>
          <ul>
            {conditions.map((condition) => (
              <li
                key={condition.slug}
                style={{
                  margin: "auto",
                  padding: "16px 0",
                  borderBottom: "1px dotted black",
                  maxWidth: "360px",
                }}
              >
                <Link href={`/conditions/${condition.slug}`}>
                  {condition.name}
                </Link>
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
  const conditionsDataRes = await fetch(
    "https://chronic-poetics.vercel.app/api/conditions"
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
