const results10 = [];

// Use shared TU helpers from test-utils.js

(async () => {
  const page = await TU.getSourceHTML();
  const section = TU.getFirstSectionHTML(page);

  if (!section) {
    results10.push('<div class="fail">❌ Hittade ingen &lt;section&gt; i källtexten</div>');
  } else {
    // h1: exakt en + innehåll
  const h1Count = TU.countPairs(section, 'h1');
    if (h1Count === 1) {
  const inner = TU.firstPairInner(section, 'h1');
  results10.push(TU.stripTags(inner).length > 0
        ? '<div class="pass">✔️ h1 finns exakt en gång och har innehåll</div>'
        : '<div class="fail">❌ h1 saknar innehåll</div>');
    } else if (h1Count === 0) {
      results10.push('<div class="fail">❌ h1 saknas i första section</div>');
    } else {
      results10.push('<div class="fail">❌ h1 finns fler än en gång i första section</div>');
    }

    // p: minst två p-par med innehåll
  const pCount = TU.countPairs(section, 'p');
    if (pCount >= 2) {
  const firstP = TU.firstPairInner(section, 'p');
  const okFirst = TU.stripTags(firstP).length > 0;
      // Kontrollera att minst två p har innehåll
  const pAll = section.match(/<p\b[\s\S]*?<\/p>/gi) || [];
  const nonEmpty = pAll.filter(p => TU.stripTags(p).length > 0).length;
      results10.push(okFirst && nonEmpty >= 2
        ? '<div class="pass">✔️ minst två p har start-/sluttagg och innehåll</div>'
        : '<div class="fail">❌ minst två p med start-/sluttagg och innehåll krävs</div>');
    } else {
      results10.push('<div class="fail">❌ minst två p-par krävs i första section</div>');
    }

    // img: första img i första section med src+alt
  const imgTag = TU.firstImgTag(section);
  results10.push(TU.imgHasSrcAlt(imgTag)
      ? '<div class="pass">✔️ första img i första section har giltig src och alt</div>'
      : '<div class="fail">❌ första img i första section saknar giltig src eller alt</div>');

    // code -> strong: Använd inte <code> för att markera vikt / prisinfo i denna övning
    if (/<code\b[\s\S]*?<\/code>/i.test(section)) {
      results10.push('<div class="fail">❌ Använd inte &lt;code&gt; här – byt till &lt;strong&gt; för semantisk betonad text</div>');
    } else if (/<strong\b/i.test(section)) {
      results10.push('<div class="pass">✔️ Använder &lt;strong&gt; för betoning istället för &lt;code&gt;</div>');
    } else {
      results10.push('<div class="fail">❌ Ingen betoning hittad – använd &lt;strong&gt; istället för &lt;code&gt;</div>');
    }

    // button: minst en med innehåll
    if (TU.hasPair(section, 'button')) {
      const btnInner = TU.firstPairInner(section, 'button');
      results10.push(TU.stripTags(btnInner).length > 0
        ? '<div class="pass">✔️ första button i första section har start-/sluttagg och innehåll</div>'
        : '<div class="fail">❌ första button saknar innehåll</div>');
    } else {
      results10.push('<div class="fail">❌ button saknas eller är inte korrekt stängd i första section</div>');
    }
  }

  const firstRenderedSection = document.querySelector('section');
  firstRenderedSection && firstRenderedSection.insertAdjacentHTML('beforeend', results10.join(''));
})();
