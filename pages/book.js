import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuyButton from "../components/BuyButton";

export default function Book() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Book</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Book</h1>

        <div className={styles.info}>
          <div>
            <BuyButton />
          </div>
          <p>TBD</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
