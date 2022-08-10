export const populatePiecesArrayWithArtistSlug = (pieces, artists) =>
  pieces.map((piece) => {
    if (!piece) {
      return;
    }

    const matchingArtist = artists.find(
      (artist) => artist.id === piece.artists[0]
    );

    return {
      ...piece,
      artistSlug: matchingArtist.slug,
    };
  });
