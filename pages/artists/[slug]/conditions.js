import MetaTags from "../../../components/MetaTags";
import styles from "../../../styles/Home.module.scss";
import ConditionView from "../../../components/ConditionView";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavigablePage from "../../../components/NavigablePage";
import { populatePiecesArrayWithArtistSlug } from "../../../utils/populate";
import Spinner from "../../../components/Spinner";
import { useRouter } from "next/router";

export default function ArtistConditionsPage({ artist, pieces }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title={`Chronic Poetics - ${artist.name} Conditions`}
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords={`condition, ${artist.conditions.data
          .map((condition) => condition)
          .join(", ")}`}
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <Navbar />
      <NavigablePage key={artist.name} artist={artist}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {artist.conditions.data.map((condition) => (
            <ConditionView
              key={condition.name}
              condition={condition}
              pieces={pieces}
            />
          ))}
        </div>
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

  const mappedPieces = artist.conditions.data.map(async (condition) => {
    const fetchedPiece = await fetch(
      `https://chronic-poetics.vercel.app/api/pieces/condition/${condition.id}`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });

    return fetchedPiece.json();
  });

  const pieces = await Promise.all(mappedPieces);

  const artistsDataRequest = await fetch(
    "https://chronic-poetics.vercel.app/api/artists/"
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artists = await artistsDataRequest.json();

  return {
    props: {
      artist,
      pieces:
        pieces.map((piece) =>
          populatePiecesArrayWithArtistSlug(piece, artists)
        )[0] || null,
    },
  };
};
