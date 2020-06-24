export const search = (array, value) => {
  let filteredArray;
  filteredArray = array.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  return filteredArray;
};
