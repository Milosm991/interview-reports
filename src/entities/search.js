export const search = (array, value) => {
  let filteredArray = [];
  return (filteredArray = array.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  ));
};
