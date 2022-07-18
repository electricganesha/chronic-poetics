import styles from "/styles/Home.module.scss";
import Head from "next/head";
import ConditionView from "../../components/ConditionView";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

export default function ConditionPage({condition}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Condition Page</title>
      </Head>
      <Navbar />
      <ConditionView condition={condition} />
      <Footer />
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
