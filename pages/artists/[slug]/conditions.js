import MetaTags from "../../../components/MetaTags";
import styles from "../../../styles/Condition.module.scss";
import ConditionView from "../../../components/ConditionView";
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
      <NavigablePage key={artist.name} artist={artist}>
        <div className={styles.wrapper}>
          {artist.conditions.data.map((condition) => (
            <ConditionView
              key={condition.name}
              condition={condition}
              pieces={pieces}
            />
          ))}
        </div>
      </NavigablePage>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/artists`);
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
    `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.params.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artist = await artistDataRequest.json();

  const mappedPieces = artist.conditions.data.map(async (condition) => {
    const fetchedPiece = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/pieces/condition/${condition.id}`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });

    return fetchedPiece.json();
  });

  const pieces = await Promise.all(mappedPieces);

  const artistsDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/artists/`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artists = await artistsDataRequest.json();

  const piecesToReturn =
    pieces.map(
      (piece) =>
        (piece && populatePiecesArrayWithArtistSlug(piece, artists)) ?? null
    )[0] ?? null;

  if (!piecesToReturn) return { props: { artist } };

  return {
    props: {
      artist,
      pieces: piecesToReturn.filter((piece) => Boolean(piece)),
    },
  };
};
