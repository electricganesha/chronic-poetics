export const sortAlphabetically = (arrayItemA, arrayItemB) => {
  if (arrayItemA.name < arrayItemB.name) {
    return -1;
  }

  if (arrayItemA.name > arrayItemB.name) {
    return 1;
  }

  return 0;
};

export const removeDuplicates = (array, key) => {
  const check = new Set();
  return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
};
