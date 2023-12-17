export const sum = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
