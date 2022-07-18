import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Home</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Chronic Poetics</h1>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <span style={{marginRight: "12px"}}>A project by</span>{" "}
          <Image
            src="/cl-logo.jpg"
            alt="Colliding Lines Logo"
            width="120"
            height="120"
          />
        </h3>
      </main>
      <Footer />
    </div>
  );
}
