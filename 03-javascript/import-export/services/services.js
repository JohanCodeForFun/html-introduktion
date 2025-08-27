export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function load(key, fallback = null) {
  const raw = localStorage.getItem(key);
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
export function clearStorage(key) {
  localStorage.removeItem(key);
}
