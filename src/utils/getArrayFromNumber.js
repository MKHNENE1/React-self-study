export function getArrayFromNumber(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(i + 1);
  }
  return result;
}
