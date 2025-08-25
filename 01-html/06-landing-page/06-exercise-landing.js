const results = [];

function testLanding() {
  // Testa endast inom första övnings-sektionen (inte .solution)
  const targetSection =
    document.querySelector('.exercise-container > section:not(.solution)') ||
    document.querySelector('section') ||
    document.createElement('div');

  // Testa att det finns en h1, minst en p, en img och en button
  const h1 = targetSection.querySelectorAll('h1');
  const p = targetSection.querySelectorAll('p');
  const img = targetSection.querySelectorAll('img');
  const button = targetSection.querySelectorAll('button');
  if (h1.length === 1 && h1[0].textContent.trim()) {
    results.push('<div class="pass">✔️ Hittade huvudrubrik (h1) med innehåll</div>');
  } else {
    results.push('<div class="fail">❌ Huvudrubrik (h1) saknas eller finns fler än en</div>');
  }
  if (p.length >= 1 && Array.from(p).every(el => el.textContent.trim())) {
    results.push('<div class="pass">✔️ Hittade beskrivning (p) med innehåll</div>');
  } else {
    results.push('<div class="fail">❌ Beskrivning (p) saknas</div>');
  }
  if (img.length >= 1 && Array.from(img).every(el => (el.getAttribute('src')||'').trim() && (el.getAttribute('alt')||'').trim())) {
    results.push('<div class="pass">✔️ Hittade bild (img) med src och alt</div>');
  } else {
    results.push('<div class="fail">❌ Bild (img) saknas</div>');
  }
  if (button.length >= 1 && Array.from(button).every(el => el.textContent.trim())) {
    results.push('<div class="pass">✔️ Hittade knapp (button) med innehåll</div>');
  } else {
    results.push('<div class="fail">❌ Knapp (button) saknas</div>');
  }
}

testLanding();

const firstSection = document.querySelector('section');
if (firstSection) {
  firstSection.insertAdjacentHTML(
    'beforeend',
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join('')
  );
}
