export const sortAlphabetically = (arrayItemA, arrayItemB) => {
  if (arrayItemA.name < arrayItemB.name) {
    return -1;
  }

  if (arrayItemA.name > arrayItemB.name) {
    return 1;
  }

  return 0;
};
