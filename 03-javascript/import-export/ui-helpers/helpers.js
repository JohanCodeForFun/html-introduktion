export function qs(sel, root = document) {
  return root.querySelector(sel);
}
export function uid() {
  return Math.random().toString(36).slice(2, 9);
}
