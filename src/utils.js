export const sortArray = (key, direction, array) => {
  if (array.length === 0) return array;

  return array.slice().sort((first, second) => {
    if (typeof first[key] === "string") {
      return direction === "asc"
        ? first[key].localeCompare(second[key])
        : second[key].localeCompare(first[key]);
    } else {
      return direction === "asc"
        ? first[key] - second[key]
        : second[key] - first[key];
    }
  });
};
