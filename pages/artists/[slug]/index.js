import React from "react";
import Spinner from "../../../components/Spinner";
import { useRouter } from "next/router";

export default function ArtistPage({ artist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return <React.Fragment />;
}

export const getServerSideProps = async (req) => {
  const artistDataRequest = await fetch(
    `https://chronic-poetics.vercel.app/api/artists/${req.params.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const artist = await artistDataRequest.json();

  return {
    redirect: {
      destination: artist.navigation[0],
      permanent: false,
    },
  };
};
