import React from "react";
import styles from "/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

export default function Conditions({conditions}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Conditions</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Conditions</h1>
        <div className={styles.info}>
          <ul>
            {conditions.map(condition =>
              <li
                key={condition.slug}
                style={{
                  margin: "auto",
                  padding: "16px 0",
                  borderBottom: "1px dotted black",
                  maxWidth: "360px"
                }}
              >
                <Link href={`/conditions/${condition.slug}`}>
                  {condition.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

Conditions.getInitialProps = async () => {
  const conditionsDataRes = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/conditions`
  ).catch(() => {
    console.error("Error fetching conditions from API");
  });

  const conditions = await conditionsDataRes.json();

  return {
    conditions
  };
};
