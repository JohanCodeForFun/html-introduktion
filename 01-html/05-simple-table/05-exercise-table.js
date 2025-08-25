const results = [];

function testTable() {
  // Testa att det finns en tabell med minst en rubrikrad och två datarader
  const table = document.querySelector('table');
  if (table) {
    const th = table.querySelectorAll('th');
    const tr = table.querySelectorAll('tr');
    if (th.length >= 1 && Array.from(th).every(h => h.textContent.trim())) {
      results.push('<div class="pass">✔️ Hittade rubrikrad med innehåll</div>');
    } else {
      results.push('<div class="fail">❌ Tabellen saknar rubrikrad eller innehåll</div>');
    }
    if (tr.length >= 3) {
      // Kontrollera att varje datarad har minst en icke-tom td
      const dataRows = Array.from(tr).slice(1);
      const allHaveContent = dataRows.every(row =>
        Array.from(row.querySelectorAll('td,th')).some(cell => cell.textContent.trim())
      );
      results.push(allHaveContent
        ? `<div class="pass">✔️ Hittade ${dataRows.length} datarader med innehåll</div>`
        : '<div class="fail">❌ Datarader saknar innehåll</div>');
    } else {
      results.push('<div class="fail">❌ Minst två datarader krävs</div>');
    }
  } else {
    results.push('<div class="fail">❌ Ingen tabell hittades</div>');
  }
}

testTable();

const firstSection = document.querySelector('section');
if (firstSection) {
  firstSection.insertAdjacentHTML(
    'beforeend',
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join('')
  );
}
