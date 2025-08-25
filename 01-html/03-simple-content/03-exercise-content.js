const results = [];

function testContent() {
  // Testa att det finns en h1, minst två h2 och minst tre p
  const h1 = document.querySelectorAll('h1');
  const h2 = document.querySelectorAll('h2');
  const p = document.querySelectorAll('p');
  if (h1.length === 1 && h1[0].textContent.trim()) {
    results.push('<div class="pass">✔️ Hittade en huvudrubrik (h1) med innehåll</div>');
  } else {
    results.push('<div class="fail">❌ Huvudrubrik (h1) saknas eller finns fler än en</div>');
  }
  if (h2.length >= 2 && Array.from(h2).every(el => el.textContent.trim())) {
    results.push(`<div class="pass">✔️ Hittade ${h2.length} underrubriker (h2) med innehåll</div>`);
  } else {
    results.push('<div class="fail">❌ Minst två underrubriker (h2) krävs</div>');
  }
  if (p.length >= 3 && Array.from(p).every(el => el.textContent.trim())) {
    results.push(`<div class="pass">✔️ Hittade ${p.length} paragrafer med innehåll</div>`);
  } else {
    results.push('<div class="fail">❌ Minst tre paragrafer krävs</div>');
  }
}

testContent();

const firstSection = document.querySelector('section');
if (firstSection) {
  firstSection.insertAdjacentHTML(
    'beforeend',
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join('')
  );
}
