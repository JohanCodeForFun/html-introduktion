const results = [];

function testElement(tag, expectedCount) {
  const elements = document.getElementsByTagName(tag);
  const count = elements.length;
  if (count === expectedCount) {
    results.push(
      `<div class="pass">&lt;${tag}&gt;: ✔️ Hittade exakt ${expectedCount}</div>`
    );
  } else {
    results.push(
      `<div class="fail">&lt;${tag}&gt;: ❌ Hittade ${count}, förväntade ${expectedCount}</div>`
    );
  }
  // Testa att elementet inte är tomt (endast om minst ett hittades)
  if ((tag === "h1" || tag === "p") && count > 0) {
    let emptyCount = 0;
    for (let el of elements) {
      if (!el.textContent.trim()) emptyCount++;
    }
    if (emptyCount === 0) {
      results.push(`<div class="pass">&lt;${tag}&gt;: ✔️ Ingen är tom</div>`);
    } else {
      results.push(`<div class="fail">&lt;${tag}&gt;: ❌ ${emptyCount} är tomma</div>`);
    }
  }
}

testElement("h1", 1);
testElement("p", 3);
testElement("b", 1);

const firstSection = document.querySelector("section");

if (firstSection) {
  firstSection.insertAdjacentHTML(
    "beforeend",
    "<h3 class='test-result'>Test Resultat:</h3>" + results.join("")
  );
}
