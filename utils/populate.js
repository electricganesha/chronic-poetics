export const populatePiecesArrayWithArtistSlug = (pieces, artists) =>
  pieces.map((piece) => {
    if (!piece) {
      return null;
    }

    const matchingArtist = artists.find(
      (artist) => artist.id === piece.artists[0]
    );

    if (!matchingArtist) return null;

    return {
      ...piece,
      artistSlug: matchingArtist.slug,
    };
  });
