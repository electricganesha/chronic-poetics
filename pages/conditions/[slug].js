import MetaTags from "../../components/MetaTags";
import styles from "../../styles/Home.module.scss";
import ConditionView from "../../components/ConditionView";
import { populatePiecesArrayWithArtistSlug } from "../../utils/populate";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";

export default function ConditionsBySlug({ condition, pieces }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title={`Chronic Poetics - ${condition[0].name}`}
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords={`condition, ${condition[0].name}`}
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <ConditionView condition={condition[0]} pieces={pieces} />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://chronic-poetics.vercel.app/api/conditions");
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
  const conditionDataRequest = await fetch(
    `https://chronic-poetics.vercel.app/api/conditions/${req.params.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const condition = await conditionDataRequest.json();

  const piecesDataRequest = await fetch(
    `https://chronic-poetics.vercel.app/api/pieces/condition/${condition[0].id}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const pieces = await piecesDataRequest.json();

  const mappedArtists = pieces.map(async (piece) => {
    const fetchedArtist = await fetch(
      `https://chronic-poetics.vercel.app/api/artists/piece/${piece.id}`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });

    return fetchedArtist.json();
  });

  const artists = await Promise.all(mappedArtists);

  const mappedPieces = populatePiecesArrayWithArtistSlug(pieces, artists);
  return {
    props: {
      condition,
      pieces: mappedPieces,
    },
  };
};
