export const populatePiecesArrayWithArtistSlug = (pieces, artists) =>
  pieces.map((piece) => {
    if (!piece) {
      return;
    }
    console.log("piece ", piece);
    const artist = artists.find((artist) => artist.id === piece.artists[0]);

    return {
      ...piece,
      artistSlug: artist.slug,
    };
  });
