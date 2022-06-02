import styles from "/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";

export default function ConditionPage({condition}) {
  console.log("condition.symptoms", condition.symptoms);
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Condition Page</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "70vh"
        }}
      >
        <h1 style={{marginBottom: 0}}>
          {condition.name}
        </h1>
        <p style={{textAlign: "justify", maxWidth: "60%", marginTop: 0}}>
          {condition.description}
          {condition.source &&
            <blockquote
              cite={condition.source.link}
              style={{fontSize: "12px", textAlign: "right", margin: "16px 0"}}
            >
              Source:{" "}
              <Link href={condition.source.link}>{condition.source.name}</Link>
            </blockquote>}
        </p>
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid black",
            borderBottom: "1px solid black"
          }}
        >
          {condition.symptoms &&
            <div>
              <p>Symptoms:</p>
              {condition.symptoms.map((symptom, index) =>
                <p key={index}>
                  <Link href={symptom.link}>
                    {symptom.name}
                  </Link>
                </p>
              )}
            </div>}
          {condition.artists &&
            <div style={{textAlign: "right"}}>
              <p>
                Artists suffering from {condition.name}:
              </p>
              {condition.artists.map(artist =>
                <Link key={artist.slug} href={`/artists/${artist.slug}`}>
                  {artist.name}
                </Link>
              )}
            </div>}
        </div>
        {condition.wiki &&
          <Link href={condition.wiki}>More information on Wikipedia</Link>}
      </div>
    </div>
  );
}

ConditionPage.getInitialProps = async req => {
  const conditionDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/conditions/${req.query.slug}`
  ).catch(() => {
    console.error("Error fetching condition from API");
  });

  const condition = await conditionDataRequest.json();

  return {
    condition
  };
};
