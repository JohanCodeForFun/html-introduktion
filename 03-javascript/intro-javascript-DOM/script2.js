// Spara hero title i variabel för återanvänding
const heroSection = document.querySelector("#hero-section");

const heroTitle = document.querySelector("#hero-title");
heroTitle.textContent = "Första lektion JavaScript!";

const description =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis illum tempore quaerat vero.";

// Det går även att uppdatera direkt utan variabel
document.querySelector("#hero-title").textContent =
  "Första lektion JavaScript 2025!";
document.querySelector("#hero-title").textContent = "lektion!";
document.querySelector("#hero-title").textContent = "Första!";
document.querySelector("#hero-title").textContent =
  "Första lektion JavaScript 2025!";

const paragraph = document.createElement("p");
paragraph.textContent = description;

// Kan uppdatera flera saker:
heroSection.appendChild(paragraph);

// Lägga till class
heroSection.classList.add("ny-class");

// ta bort class för dynamisk styling
heroSection.classList.remove("my-class");

// Lägga till click event med funktion
heroSection.addEventListener("click", logClick);

function logClick(event) {
  // Det element som faktiskt klickades
  const target = event.target;

  // Toggla klass på hela hero-sektionen varje klick
  heroSection.classList.toggle("ny-class");

  // Valfritt: toggla en highlight-klass på det specifika klickade elementet
  target.classList.toggle("clicked-highlight");

  // Logga enkel info
  console.log(
    "[CLICK] togglade ny-class på #hero-section. Har nu:",
    heroSection.className
  );
  console.log("[CLICK] target outerHTML:", target.outerHTML);
}
