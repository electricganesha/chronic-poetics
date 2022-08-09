import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItemsList from "../components/ItemsList";

export default function Findings() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Findings</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Findings</h1>
        <div className={styles.info}>
          <p>
            As part of Chronic Poetics we asked participating artists to
            complete a survey that explored how accessible the arts are for
            disabled artists and what their experience was of engaging with the
            arts. Key findings from the study are:
            <ItemsList>
              <ul>
                <li>
                  Engagement in the arts was very important for the participants
                  of this study.
                </li>
                <li>
                  The biggest barriers to engaging in the arts was cost, time,
                  and accessibility.
                </li>
                <li>
                  Participants would engage more in arts if it was cheaper,
                  accessible, and supportive.
                </li>
                <li>
                  Participants stated that it was important for them to be
                  supported with things like submitting their work, exhibitions,
                  and research.
                </li>
                <li>
                  It was important to be supported by community, artist
                  networks, family, and friends.
                </li>
              </ul>
            </ItemsList>
            <p style={{ marginTop: 64 }}>
              You can read and download the full report as a pdf{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/pdf/chronic-poetics-accessibility-survey-report.pdf"
              >
                here
              </a>
              .
            </p>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
