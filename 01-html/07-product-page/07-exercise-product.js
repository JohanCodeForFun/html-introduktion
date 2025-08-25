const results = [];

function testProduct() {
  // Testa att det finns en h1, en img, minst två p, och en button
  const targetSection =
    document.querySelector(".exercise-container > section:not(.solution)") ||
    document.querySelector("section") ||
    document.createElement("div");

  const h1 = targetSection.querySelectorAll("h1");
  const img = targetSection.querySelectorAll("img");
  const p = targetSection.querySelectorAll("p");
  const button = targetSection.querySelectorAll("button");

  if (h1.length === 1) {
    results.push('<div class="pass">✔️ Hittade produktnamn (h1)</div>');
    // Innehåll i h1
    const emptyH1 = Array.from(h1).filter(el => !el.textContent.trim()).length;
    if (emptyH1 === 0) {
      results.push('<div class="pass">✔️ h1 har innehåll</div>');
    } else {
      results.push(`<div class="fail">❌ ${emptyH1} h1 saknar innehåll</div>`);
    }
  } else {
    results.push(
      '<div class="fail">❌ Produktnamn (h1) saknas eller finns fler än en</div>'
    );
  }
  if (img.length >= 1) {
    results.push('<div class="pass">✔️ Hittade produktbild (img)</div>');
    // src och alt måste finnas och vara icke-tomma
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
    results.push('<div class="fail">❌ Produktbild (img) saknas</div>');
  }
  if (p.length >= 2) {
    results.push('<div class="pass">✔️ Hittade beskrivning och pris (p)</div>');
    // Innehåll i p
    const emptyP = Array.from(p).filter(el => !el.textContent.trim()).length;
    if (emptyP === 0) {
      results.push('<div class="pass">✔️ Alla p har innehåll</div>');
    } else {
      results.push(`<div class="fail">❌ ${emptyP} p saknar innehåll</div>`);
    }
  } else {
    results.push('<div class="fail">❌ Beskrivning och pris (p) saknas</div>');
  }
  if (button.length >= 1) {
    results.push('<div class="pass">✔️ Hittade köp-knapp (button)</div>');
    // Innehåll i knapp
    const emptyBtn = Array.from(button).filter(el => !el.textContent.trim()).length;
    if (emptyBtn === 0) {
      results.push('<div class="pass">✔️ Alla knappar har text</div>');
    } else {
      results.push(`<div class="fail">❌ ${emptyBtn} knapp(ar) saknar text</div>`);
    }
  } else {
    results.push('<div class="fail">❌ Köp-knapp (button) saknas</div>');
  }
}

testProduct();

const firstSection = document.querySelector("section");
if (firstSection) {
  firstSection.insertAdjacentHTML(
    "beforeend",
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join("")
  );
}
