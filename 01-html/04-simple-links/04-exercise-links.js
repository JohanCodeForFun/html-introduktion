const results = [];

function testLinks() {
  // Testa att det finns minst tre länkar
  const links = document.querySelectorAll('a');
  if (links.length >= 3) {
    results.push(`<div class="pass">✔️ Hittade ${links.length} länkar</div>`);
  } else {
    results.push('<div class="fail">❌ Minst tre länkar krävs</div>');
  }
  // Testa att alla länkar har href (endast om minst en länk finns)
  if (links.length > 0) {
    let missingHref = 0;
    links.forEach(link => {
      if (!link.getAttribute('href')) missingHref++;
    });
    if (missingHref === 0) {
      // Kontrollera även att länktext inte är tom
      const emptyText = Array.from(links).filter(a => !a.textContent.trim()).length;
      if (emptyText === 0) {
        results.push('<div class="pass">✔️ Alla länkar har href och text</div>');
      } else {
        results.push(`<div class="fail">❌ ${emptyText} länkar saknar text</div>`);
      }
    } else {
      results.push(`<div class="fail">❌ ${missingHref} länkar saknar href-attribut</div>`);
    }
  }
}

testLinks();

const firstSection = document.querySelector('section');
if (firstSection) {
  firstSection.insertAdjacentHTML(
    'beforeend',
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join('')
  );
}
