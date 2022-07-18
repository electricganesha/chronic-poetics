export function slugToName(slug) {
  return slug.split("-").map(string => capitalizeFirstLetter(string)).join(" ");
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
