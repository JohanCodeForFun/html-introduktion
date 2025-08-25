export function displayHero(products) {
  console.log(products[0]);
  console.log(products[0].price);

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

  heroPrice.textContent = "Pris: " + products[0].price * 10 + "kr";

  heroPrice.textContent = `Pris: ${products[0].price * 10}kr`;

  heroBtn.textContent = "Läs mer";
}

// exempel på ny funktion
export function funktionsName(parameter) {
  // lägg till er kod från script.js
}
