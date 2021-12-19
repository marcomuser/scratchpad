const a = [false, 1, 0, 1, 2, 0, 1, 0, 0, 0, 3, "a"];

const moveZeros = (arr) => {
  const noZeros = arr.filter((el) => el !== 0);
  const zeros = Array(arr.length - noZeros.length).fill(0, 0);
  return [...noZeros, ...zeros];
};
