import MetaTags from "../../../components/MetaTags";
import styles from "../../../styles/Home.module.scss";
import NavigablePage from "../../../components/NavigablePage";
import ArtistWorkPage from "../../../components/ArtistWorkPage";
import Spinner from "../../../components/Spinner";
import { useRouter } from "next/router";

export default function ArtistPoetryPage({ artist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title={`Chronic Poetics - ${artist.name} Poetry`}
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords={`work, pieces, art, artwork, poetry, essay, prose, ${artist.name}`}
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavigablePage key={artist.name} artist={artist}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {artist.pieces.data.map((piece) => {
              if (piece.typeOfWork === "text")
                return (
                  <ArtistWorkPage
                    key={piece.name}
                    name={piece.name}
                    type={piece.typeOfWork}
                    work={piece.work}
                  />
                );
            })}
          </div>
        </NavigablePage>
      </div>
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

  return {
    props: {
      artist,
    },
  };
};
