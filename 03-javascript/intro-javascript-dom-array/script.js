// ===== Del 1: array → <ul><li> =====
// 1) Skapa en array av namn och spara i en variabel
const names = ["Anna", "Bo", "Cleo", "Dina", "Egon"];

// 2) Loopa igenom och skriv ut som <li> i <ul>
const ul = document.getElementById("name-list");
names.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name; // textContent är säkert (ingen HTML tolkas)
  ul.appendChild(li);
});

// ===== Del 2: 2D-array → <table><tr><td> =====
// 1) En 2D-array (lista i lista). Första raden fungerar som "rubriker".
const matrix = [
  ["Produkt", "Pris (kr)", "Lager"],
  ["Kaffe", 49, "I butik"],
  ["Te", 39, "Beställningsvara"],
  ["Kakao", 29, "I butik"],
  ["Lattemjölk", 25, "Slut"],
];

// 2) Skriv ut som tabell med en <tr> per rad och <td> per cell
const table = document.getElementById("data-table");
matrix.forEach((row) => {
  const tr = document.createElement("tr");
  row.forEach((cell) => {
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  });
  table.appendChild(tr);
});
