import MetaTags from "../../components/MetaTags";
import styles from "../../styles/Home.module.scss";
import ConditionView from "../../components/ConditionView";
import { populatePiecesArrayWithArtistSlug } from "../../utils/populate";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";
import WebGLExperience from "../../components/WebGLExperience";

export default function ConditionsBySlug({ condition, pieces }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  if (!condition || !pieces) return null;

  return (
    <div className={styles.container}>
      <MetaTags
        title={`Chronic Poetics - ${condition[0]?.name}`}
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords={`condition, ${condition[0]?.name}`}
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <ConditionView condition={condition[0]} pieces={pieces} />
      {condition[0]?.slug === "copd" ? <WebGLExperience /> : null}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/conditions`);

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  const data = await res.json();

  const paths = data.map((condition) => {
    return {
      params: {
        slug: condition.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (req) => {
  try {
    const conditionDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/conditions/${req.params.slug}`
    );

    if (!conditionDataRequest.ok) {
      throw new Error(
        `API request failed with status ${conditionDataRequest.status}`
      );
    }

    const condition = await conditionDataRequest.json();

    const piecesDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/pieces/condition/${condition[0].id}`
    );

    if (!piecesDataRequest.ok) {
      throw new Error(
        `API request failed with status ${piecesDataRequest.status}`
      );
    }

    const pieces = await piecesDataRequest.json();

    const mappedArtists = pieces.map(async (piece) => {
      const fetchedArtist = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/artists/piece/${piece.id}`
      );

      if (!fetchedArtist.ok) {
        throw new Error(
          `API request failed with status ${fetchedArtist.status}`
        );
      }

      return fetchedArtist.json();
    });

    const artists = await Promise.all(mappedArtists);

    const mappedPieces = populatePiecesArrayWithArtistSlug(pieces, artists);

    if (!mappedPieces) return null;

    return {
      props: {
        condition,
        pieces: mappedPieces.filter((piece) => Boolean(piece)),
      },
    };
  } catch (error) {
    console.error("Error fetching data from API", error);
    return {
      props: {
        condition: null,
        pieces: null,
      },
    };
  }
};
