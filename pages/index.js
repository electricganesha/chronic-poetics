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
          <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between', minWidth: '420px'}}>
            <span style={{marginRight: "12px"}}>A project by</span>{" "}
            <Image
              src="/cl-logo.jpg"
              alt="Colliding Lines Logo"
              width="120"
              height="120"
            />
            <Image
              src="/pp-logo.png"
              alt="Point Positive Logo"
              width="120"
              height="120"
            />
        </div>
        </h3>
      </main>
      <Footer />
    </div>
  );
}
