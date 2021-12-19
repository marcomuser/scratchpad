const a = [false, 1, 0, 1, 2, 0, 1, 0, 0, 0, 3, "a"];
const moveZeros = (arr) => {
  const noZeros = arr.filter((el) => el !== 0);
  const zeros = Array(arr.length - noZeros.length).fill(0, 0);
  return [...noZeros, ...zeros];
};

const b = [1, 2, "aasf", "1", "123", 123];
const filter_list = (list) => {
  return list.filter((el) => Number.isInteger(el));
};

const c = 1021;
const descendingOrder = (n) => {
  return Number(
    Array.from(n.toString())
      .map(Number)
      .sort((a, z) => z - a)
      .join("")
  );
};

console.log(descendingOrder(c));
