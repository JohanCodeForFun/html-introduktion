export function capitalize(s) {
  if (!s) return "";
  return s[0].toUpperCase() + s.slice(1);
}

export function slugify(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatPercent(value, total) {
  if (!total) return "0%";
  return Math.round((value / total) * 100) + "%";
}
