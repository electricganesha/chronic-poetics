import MetaTags from "../components/MetaTags";
import styles from "../styles/Home.module.scss";
import ItemsList from "../components/ItemsList";
import Spinner from "../components/Spinner";
import { useRouter } from "next/router";

export default function FindingsPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Findings"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="findings, study, statistics"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <main className={styles.findings}>
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
                href="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660146727/chronic-poetics/pdf/chronic-poetics-accessibility-survey-report.pdf"
              >
                here
              </a>
              .
            </p>
          </p>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async (req) => {
  return {
    props: {},
  };
};
