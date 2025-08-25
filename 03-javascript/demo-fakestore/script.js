import { displayHero } from "./displayHero.js";
import { displayList } from "./displayList.js";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error(res.status);
  return res.json(); // returnerar data för vidare användning
}

async function init() {
  try {
    const products = await fetchProducts();
    renderData(products);
  } catch (err) {
    console.error("Kunde inte hämta produkter:", err);
    // ev. visa felmeddelande i UI
  }
}

init();

function renderData(products) {
  displayHero(products);

  displayList(products);
}
