export const calculateNavigablePagesForArtist = (artist) => {
  let pages = 2;

  if (artist?.interview) {
    pages += 1;
  }

  if (artist?.conditions?.length > 0) {
    pages += 1;
  }

  if (artist?.importance) {
    pages += 1;
  }

  return pages;
};

export const mapNavigationForArtist = (artist, pieces, conditions) => {
  const artistNav = [];

  if (artist && artist.name && artist.slug) {
    artistNav.push(`/artists/${artist.slug}/bio`);
  }

  if (pieces && pieces.length > 0) {
    artistNav.push(`/artists/${artist.slug}/pieces`);
  }

  if (artist && artist.interview) {
    artistNav.push(`/artists/${artist.slug}/interview`);
  }

  if (conditions && conditions.length > 0) {
    artistNav.push(`/artists/${artist.slug}/conditions`);
  }

  if (artist && artist.importance) {
    artistNav.push(`/artists/${artist.slug}/survey`);
  }

  return artistNav;
};
