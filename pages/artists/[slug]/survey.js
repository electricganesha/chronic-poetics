import MetaTags from "../../../components/MetaTags";
import styles from "../../../styles/Home.module.scss";
import SurveyView from "../../../components/SurveyView";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavigablePage from "../../../components/NavigablePage";
import Spinner from "../../../components/Spinner";
import { useRouter } from "next/router";

export default function ArtistSurveyPage({ artist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title={`Chronic Poetics - ${artist.name} Survey`}
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords={`survey, interview, ${artist.name}`}
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <Navbar />
      <NavigablePage key={artist.name} artist={artist}>
        <SurveyView artist={artist} />
      </NavigablePage>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://chronic-poetics.vercel.app/api/artists");
  const data = await res.json();

  const paths = data.map((artist) => {
    return {
      params: {
        slug: artist.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (req) => {
  const artistDataRequest = await fetch(
    `https://chronic-poetics.vercel.app/api/artists/${req.params.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artist = await artistDataRequest.json();

  return {
    props: {
      artist,
    },
  };
};
