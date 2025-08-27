export function add(a, b) {
  a = Number(a);
  b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
  return a + b;
}

export function average(arr) {
  const nums = arr.map(Number).filter((n) => !Number.isNaN(n));
  return nums.length ? nums.reduce((s, n) => s + n, 0) / nums.length : NaN;
}
