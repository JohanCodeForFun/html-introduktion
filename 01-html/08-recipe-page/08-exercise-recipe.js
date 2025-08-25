const results = [];

function testRecipe() {
  // Testa endast inom första övnings-sektionen (inte .solution)
  const targetSection =
    document.querySelector('.exercise-container > section:not(.solution)') ||
    document.querySelector('section') ||
    document.createElement('div');

  // Testa att det finns en h1, en img, en h2, en ul med minst tre li, och en p
  const h1 = targetSection.querySelectorAll('h1');
  const img = targetSection.querySelectorAll('img');
  const h2 = targetSection.querySelectorAll('h2');
  const ul = targetSection.querySelectorAll('ul');
  const p = targetSection.querySelectorAll('p');
  let ingredientCount = 0;
  let nonEmptyIngredientCount = 0;
  if (ul.length > 0) {
    ul.forEach(list => {
      const items = list.querySelectorAll('li');
      ingredientCount += items.length;
      nonEmptyIngredientCount += Array.from(items).filter(li => li.textContent.trim()).length;
    });
  }
  if (h1.length === 1) {
    results.push('<div class="pass">✔️ Hittade rubrik (h1)</div>');
    // Innehåll i h1
    const emptyH1 = Array.from(h1).filter(el => !el.textContent.trim()).length;
    if (emptyH1 === 0) {
      results.push('<div class="pass">✔️ h1 har innehåll</div>');
    } else {
      results.push(`<div class="fail">❌ ${emptyH1} h1 saknar innehåll</div>`);
    }
  } else {
    results.push('<div class="fail">❌ Rubrik (h1) saknas eller finns fler än en</div>');
  }
  if (img.length >= 1) {
    results.push('<div class="pass">✔️ Hittade bild (img)</div>');
    // Bild ska ha src och alt (ej tomma)
    let missingSrc = 0;
    let missingAlt = 0;
    img.forEach(el => {
      const src = el.getAttribute('src');
      const alt = el.getAttribute('alt');
      if (!src || !src.trim()) missingSrc++;
      if (!alt || !alt.trim()) missingAlt++;
    });
    if (missingSrc === 0 && missingAlt === 0) {
      results.push('<div class="pass">✔️ Alla bilder har src och alt</div>');
    } else {
      const parts = [];
      if (missingSrc > 0) parts.push(`${missingSrc} saknar src`);
      if (missingAlt > 0) parts.push(`${missingAlt} saknar alt`);
      results.push(`<div class="fail">❌ Bilder: ${parts.join(', ')}</div>`);
    }
  } else {
    results.push('<div class="fail">❌ Bild (img) saknas</div>');
  }
  if (h2.length >= 1) {
    results.push('<div class="pass">✔️ Hittade ingrediensrubrik (h2)</div>');
    const hasNonEmptyH2 = Array.from(h2).some(el => el.textContent.trim());
    if (hasNonEmptyH2) {
      results.push('<div class="pass">✔️ Minst en h2 har innehåll</div>');
    } else {
      results.push('<div class="fail">❌ h2 saknar innehåll</div>');
    }
  } else {
    results.push('<div class="fail">❌ Ingrediensrubrik (h2) saknas</div>');
  }
  if (nonEmptyIngredientCount >= 3) {
    results.push(`<div class="pass">✔️ Hittade ${nonEmptyIngredientCount} ingredienser</div>`);
  } else {
    results.push('<div class="fail">❌ Minst tre ingredienser krävs</div>');
  }
  if (p.length >= 1) {
    results.push('<div class="pass">✔️ Hittade beskrivning (p)</div>');
    const emptyP = Array.from(p).filter(el => !el.textContent.trim()).length;
    if (emptyP === 0) {
      results.push('<div class="pass">✔️ Alla p har innehåll</div>');
    } else {
      results.push(`<div class="fail">❌ ${emptyP} p saknar innehåll</div>`);
    }
  } else {
    results.push('<div class="fail">❌ Beskrivning (p) saknas</div>');
  }
}

testRecipe();

const firstSection = document.querySelector('section');
if (firstSection) {
  firstSection.insertAdjacentHTML(
    'beforeend',
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join('')
  );
}
