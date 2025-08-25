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
  //   console.log(products[0]);

  const heroSection = document.querySelector(".hero-section");

  const heroTitle = heroSection.querySelector("h2");
  const heroDescription = heroSection.querySelector("p");
  const heroPrice = heroSection.querySelector(".product-price");
  const heroBtn = heroSection.querySelector(".product-btn");
  const heroImg = heroSection.querySelector("img");

  heroTitle.textContent = products[0].title;

  heroImg.src = products[0].image;
  heroImg.alt = products[0].title;

  heroDescription.textContent = products[0].description;

  heroPrice.textContent = products[0].price;
  heroBtn.textContent = "Läs mer";

  // products list
  const productSection = document.querySelector(".products");
  const list = productSection.querySelector("ul");

  //   console.log(list);

  products.map((product) => {
    const productList = document.createElement("li");

    productList.innerHTML = product.title + " <a href='/produkt/1'>läs mer</a>";

    // console.log(productList);

    list.appendChild(productList);
  });
}

/*
[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
            "rate": 3.9,
            "count": 120
        },
    }
]
*/
