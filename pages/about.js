import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - About</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>About</h1>
        <div className={styles.info}>
          <p>
            Chronic Poetics is a new anthology published and produced by{" "}
            <a href="https://pointpositive.weebly.com/">
              Point Positive Publishing
            </a>{" "}
            and <a href="https://www.collidinglines.com/">Colliding Lines</a>
          </p>
          <p>
            The collection exclusively features people with an experience of
            chronic disability and chronic pain. Featuring essays, prose,
            illustration and poetry, <b>Chronic Poetics</b> is about what we
            wish people understood about living with a chronic condition.
          </p>
          <p>
            Accompanying the print collection is an online appendix, featuring
            interviews, essays and medical information as an educational
            resource.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
